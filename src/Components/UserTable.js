import styled from "styled-components";
import editIcon from "../Assets/Icons/edit.png";
import deleteIcon from "../Assets/Icons/delete.jpg"
import EditMember from "./EditMember";
import { useState } from "react";
const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;
thead tr th,tbody tr td{
  border-bottom:0.5px solid grey;
  padding:10px;
}
`;

const UserTable = ({members, editMember, deleteMember, setSelectedMembers, selectedMembers,currentPageIndex, like, dislike,likes,dislikes,user })=>{
const[open,setOpen] = useState(null);
return <StyledTable>
  <thead >
  <tr>
    <th ><input type="checkbox"
        checked={selectedMembers?.length===members?.length}
        onChange={e=>{
          if(e.target.checked){
            setSelectedMembers(members?.map(member=>member?.index));
          }
          else setSelectedMembers([]);
        }} /></th>
    <th >Name</th>
    <th >Email</th>
    <th >Role</th>
    <th >likes</th>
    <th >dislikes</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody>
    {members?.slice(currentPageIndex*10,(currentPageIndex+1)*10)?.map(member => (
      <>
    {open === member?.index && <EditMember data={member} editMember={editMember} open={open === member?.index} close={()=>setOpen(null)}/>}
    <tr >
      <td >
        <input type="checkbox"
        checked={selectedMembers?.includes(member?.index)}
        onChange={e=>{
          if(e.target.checked)setSelectedMembers(prev=>[...prev,member?.index])
          else setSelectedMembers(prev=>{
            const temp=[...prev]
            temp.splice(temp?.indexOf(member?.index),1);
            return [...temp];
          })
        }} />
      </td>
      <td >{member?.name}</td>
      <td >{member?.email}</td>
      <td >{member?.role}</td>
      <td >{likes?.[member?.email]?.length || 0}</td>
      <td >{dislikes?.[member?.email]?.length ||0}</td>
      <td >
        <button onClick={()=>like(member?.index)} disabled={(likes?.[member?.email]?.includes(user)|| dislikes?.[member?.email]?.includes(user) )}>Like</button>{' '}
        <button onClick={()=>dislike(member?.index)} disabled={(dislikes?.[member?.email]?.includes(user) || likes?.[member?.email]?.includes(user) )}>Dislike</button>{' '}
        <button onClick={()=>setOpen(member?.index)}><img src={editIcon} alt="Edit" style={{height:"20px"}} /></button>{' '}
        <button onClick={()=>deleteMember(member?.index)}><img src={deleteIcon} alt="Delete" style={{height:"20px"}} /></button>
      </td>
    </tr></>))}
  </tbody>
</StyledTable>;
}

export default UserTable; 