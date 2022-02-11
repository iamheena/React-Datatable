import React,{useEffect,useState} from 'react';
import DataTable from 'react-data-table-component'
import Checkbox from '@material-ui/core/Checkbox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

const sortIcon=<ArrowDownward/>
const selectprops={indeterminate:isIndeterminate=>isIndeterminate};

function DatatableBase(props) {
  
  return (
  <div>
    <DataTable 
   pagination
   selectableRowsComponent={Checkbox}
   selectableRowsComponentProps={selectprops}
   sortIcon={sortIcon} 
   dense
  {...props}   
    >

    </DataTable>
    
  </div>
  )
}

export default DatatableBase;
