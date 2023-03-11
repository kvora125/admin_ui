import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useMemo } from "react";
import { fetchMembers } from "./Services/fetchMembers";
import SearchBar from "./Components/SearchBar";
import UserTable from "./Components/UserTable";
import Pagination from "./Components/Pagination";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const memberList = useMemo(
    () =>
      members?.filter((member) =>
        `${member?.name} ${member?.email} ${member?.role}`
          ?.toLocaleLowerCase()
          ?.includes(query?.toLocaleLowerCase())
      ),
    [members, query]
  );
  const [paginationState, setPaginationState] = useState({
    currentPageIndex: 0,
    totalPages: 0,
  });
  useEffect(() => {
    setLoading(true);
    fetchMembers()
      .then((data) => {
        data?.sort((a, b) => a?.name.localeCompare(b?.name));
        setMembers(data?.map((member, index) => ({ ...member, index })));
      })
      .catch((err) => {
        toast.error(err?.message || "Something went wrong.");
      })
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    setPaginationState((prev) => ({
      ...prev,
      totalPages:
        Math.floor(memberList?.length / 10) -
        (memberList?.length % 10 === 0 ? 1 : 0),
    }));
  }, [memberList]);
  useEffect(() => {
    setPaginationState((prev) => ({ ...prev, currentPageIndex: 0 }));
  }, [query]);
  const editMember = (val) => {
    const tempMembers = [...members];
    tempMembers[val?.index] = val;
    setMembers([...tempMembers]);
    setSelectedMembers([]);
  };

  const deleteMember = (index) => {
    const tempMembers = members;
    tempMembers?.splice(index, 1);
    setMembers(tempMembers?.map((member, index) => ({ ...member, index })));
    setSelectedMembers([]);
  };

  const bulkDelete = () => {
    const tempMembers = members;
    selectedMembers?.forEach((i, ind) => tempMembers?.splice(i - ind, 1));
    setMembers(tempMembers?.map((member, index) => ({ ...member, index })));
    setSelectedMembers([]);
  };
  if (loading)
    return (
      <div className="App" id='#App'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  return (
    <>
      <div className="App" >
        <SearchBar setQuery={setQuery} />
        <UserTable
          members={memberList}
          editMember={editMember}
          deleteMember={deleteMember}
          setSelectedMembers={setSelectedMembers}
          selectedMembers={selectedMembers}
          currentPageIndex={paginationState?.currentPageIndex}
        />
        <div>
          <button onClick={bulkDelete}>Delete Selected</button>{" "}
          <Pagination
            paginationState={paginationState}
            setPaginationState={(val) => {
              setPaginationState(val);
              setSelectedMembers([]);
            }}
          />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
