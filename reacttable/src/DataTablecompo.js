import React,{useEffect,useState,useMemo} from 'react';
// import DataTable from 'react-data-table-component'
import DataTable from './DatatableBase'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function DataTablecompo() {
  const [data,setState]=useState([]);
  const[filterText,setFilterText]=useState([])  
  const[resetPaginationToggle,setResetPaginationToggle]=useState()
  
  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      // console.log("data",res.data);
      setState(res.data)
      setFilterText(res.data)
     
     
    })
  },[]) 
  
  const filterhandle=(e)=>{
    const searchdata=e.target.value   
    const filterdata=data.filter((item)=>{
     if(searchdata==""){
       return item
     }
     else if(item.title && item.title.toLowerCase().includes(searchdata)){
       return item
     }
   })
  
  //  console.log("filterdata",filterdata);
   setFilterText(filterdata)

  } 
  const subheadercomponent=useMemo(()=>{    
    return (
    
    <div className="filter">
    <input type="text" onChange={filterhandle} />
   
   <button><FontAwesomeIcon icon={faTimes} size={'2x'} className="icon"/></button> 
    </div>
      )
  },[filterText,resetPaginationToggle])
  
const myNewTheme= {
  headCells: {
    style: {
       fontSize:'25px'
    },
},
cells: {
  style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
  },
},
}

const column=[
  {
      name:"UserId",
      selector:row=>row.userId,
      sortable:true,
      // cell: row => <div style={{fontSize: 18}}>{row.userId}</div>
     
  },
  {
      name:"Title",
      selector:row=>row.title,
      sortable:true,
      // cell: row => <div style={{fontSize: 18}}>{row.title}</div>
     
},
{
    name:"Body",
    selector:row=>row.body,
    sortable:true,
    // cell: row => <div style={{fontSize: 18}}>{row.body}</div>
},
]

  return (
  <div>
    
    <DataTable
    columns={column}
    data={filterText}   
    selectableRows
    fixedHeader
    fixedHeaderScrollHeight="600px"
    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
    subHeader
    subHeaderComponent={subheadercomponent}			
    persistTableHead     
    customTheme={myNewTheme}
    />
  </div>
  )
}

export default DataTablecompo;
