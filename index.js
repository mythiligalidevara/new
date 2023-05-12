import React, { useState, useEffect } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import axios from "axios"
import { faEdit, faSort, faT, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Index() {
  const [userList, setUserList] = useState([])
  const [errorcase, setErrorCase] = useState("")
  const [order, setOrder]=useState('asc');


  useEffect(() => {
    const url = "http://localhost:4005/getdata"

      axios
        .get(url)
        .then((response) => {
          let users = []
  
          if (response.data && response.data.length) {
            users = response.data
          }
  
          setUserList(users)
          
          // getAllUser();
        })
        .catch((errors) => {
          setErrorCase(errors)
  
          console.log(`Error : ${errorcase}`)
        })
    //getAllUser()
  }, [])


  // const getAllUser=()=>{
  //   const url = "http://localhost:4005/getdata"

  //   axios
  //     .get(url)
  //     .then((response) => {
  //       let users = []

  //       if (response.data && response.data.length) {
  //         users = response.data
  //       }

  //       setUserList(users)
        
  //       getAllUser();
  //     })
  //     .catch((errors) => {
  //       setErrorCase(errors)

  //       console.log(`Error : ${errorcase}`)
  //     })
  // }

  const sorting=(col)=>{
    if(order==='asc'){
        const sorted= [...userList].sort((a,b)=>
     // const sorted= {...userList,["results"]:userList.results.sort((a,b)=>
      a[col].toLowerCase()>b[col].toLowerCase()?1:-1
      )
      setUserList(sorted);
      setOrder('dsc');
      
    }
    if(order==='dsc'){
        const sorted= [...userList].sort((a,b)=>
    //   const sorted= {...userList,["result"]: userList.results.sort((a,b)=>
      a[col].toLowerCase()<b[col].toLowerCase()?1:-1
      )
      setUserList(sorted);
      setOrder('asc')
    }
  }


  const deleteUser=(id,name)=>{
   
    if(window.confirm(`Are you sure you want to delete ${name}`)){
        fetch("http://localhost:4005/deleteUser",{    
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({userid:id})
      })
      .then((res)=>res.json())
      .then((data)=>{
        alert(data.data)
        window.location.href="./userlist"
        }
      )
    }else{

    }
  }

  const editUser=(id,name)=>{
   
    if(window.confirm(`Are you sure you want to delete ${name}`)){
      
    //     fetch("http://localhost:4005/deleteUser",{    
    //     method:"POST",
    //     crossDomain:true,
    //     headers:{
    //       "Content-Type":"application/json",
    //       Accept:"application/json",
    //       "Access-Control-Allow-Origin":"*",
    //     },
    //     body:JSON.stringify({userid:id})
    //   })
    //   .then((res)=>res.json())
    //   .then((data)=>{
    //     alert(data.data)
    //     window.location.href="./userlist"
    //     }
    //   )
    // }else{

    // }
  }}

  function onSearch(event) {
    let text = event.target.value;

    if (!text) {
      // setUserList([]);
      window.location.reload();
    } else {
      let filterd = userList.filter((user) => {
        return user.email.toLowerCase().includes(text.toLowerCase());
      });
      setUserList(filterd);
    }
  }
   


  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
    <div className="container">
    <input placeholder="search fname" onChange={onSearch} />
    
      <div className='table-responsive'>
        <Table
          sx={{ minWidth: 500, marginTop: "10px" }}
          aria-label='custom pagination table'
        >
          <TableHead>
            <TableRow >
            <TableCell>id</TableCell>
            <TableCell onClick={()=>sorting("fname")}>fname<FontAwesomeIcon icon={faSort}/></TableCell>
             <TableCell onClick={()=>sorting("lname")}>lname<FontAwesomeIcon icon={faSort}/></TableCell>
             <TableCell onClick={()=>sorting("email")}>email<FontAwesomeIcon icon={faSort}/></TableCell>
            <TableCell onClick={()=>sorting("password")}>password<FontAwesomeIcon icon={faSort}/></TableCell>
            <TableCell align='left'>Actions</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? userList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : userList
            ).map((item) => (
              <TableRow key={item._id}>
                <TableCell component='th' scope='row'>
                  {item._id}
                </TableCell>
                <TableCell align='left'>{item.fname}</TableCell>
                <TableCell align='left'>{item.lname}</TableCell>
                <TableCell align='left'>{item.email}</TableCell>
                <TableCell align='left'>{item.password}</TableCell>
                <TableCell align="left"><FontAwesomeIcon icon={faTrash} onClick={()=>deleteUser(item._id,item.fname)}/>
                <FontAwesomeIcon icon={faEdit} className="mx-5" onClick={()=>editUser(item._id,item.fname)}/>
                </TableCell>
                
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                count={userList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      </div>
    </>
  )
}

export default Index;



