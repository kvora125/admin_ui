import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-40%, -40%)',
  },
};

const EditMember = ({data, editMember, open, close })=>{

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(e)
    editMember({...data,name:e?.target?.[0]?.value,email:e?.target?.[1]?.value,role:e?.target?.[2]?.checked?'member':'admin'});
    close();
  }

  return( 
  <Modal
    isOpen={!!open}
    onRequestClose={close}
    style={customStyles}
    contentLabel="Edit Member"
  >
    <form onSubmit={handleSubmit}>
      name : <input name="name" defaultValue={data?.name} />
      <br/>
      email : <input name="email" defaultValue={data?.email} type="email" />
      <br />
      role : <input name="role" id="member" type="radio" defaultChecked={data?.role==='member'} /><label for="member">Member</label><input name="role" id="admin" type="radio" defaultChecked={data?.role==='admin'} /><label for="admin">Admin</label>
      <br/><br />
      <center><button htmlType="submit">submit</button> <button onClick={close}>close</button></center>
    </form>
  </Modal>);
}

export default EditMember;