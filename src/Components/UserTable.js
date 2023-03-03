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

const UserTable = ({members, editMember, deleteMember, setSelectedMembers, selectedMembers,currentPageIndex })=>{
const[open,setOpen] = useState(null);
return <StyledTable>
  <thead >
  <tr>
    <th ></th>
    <th >Name</th>
    <th >Email</th>
    <th >Role</th>
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
      <td ><button onClick={()=>setOpen(member?.index)}><img src={editIcon} alt="Edit" style={{height:"20px"}} /></button>{' '}<button onClick={()=>deleteMember(member?.index)}><img src={deleteIcon} alt="Delete" style={{height:"20px"}} /></button></td>
    </tr></>))}
  </tbody>
</StyledTable>;
}

export default UserTable; 