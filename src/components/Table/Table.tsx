import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

interface Column {
  id: 'order '|'date' |'image' | 'price' | 'Address' | 'status' |  'trackingid' |'actions'; 
  label: string;
  minWidth?: number;
  align?: 'right';
  
}

const columns: readonly Column[] = [
  
  

  { id: 'order', 
    label: 'ORDER', 
    minWidth: 150 ,  
    align:'center' 
    
  },

  { id: 'date', 
    label: 'DATE', 
    minWidth: 150 ,
    align:'center'
  },
  {
    id: 'image', 
    label: 'IMAGE',
    minWidth: 150,
    align:'center'
    
  },

  {
    id: 'price',
    label: 'PRICE',
    minWidth: 150,
    align: 'center',

   
  },
  { id: 'address', 
    label: 'ADDRESS', 
    minWidth: 150 ,
    align:'center'   
    
  },

  {
    id: 'status',
    label: 'STATUS',
    minWidth: 150,
    align: 'center',
   
  },
  { 
    id:'trackingid',
    label: 'TRACKING ID', 
    minWidth: 150 ,  
    align:'center' 
    
  },

  
  {
    id: 'actions', 
    label: 'ACTIONS',
    minWidth: 150,
    align:'center',
  },
  
];

interface Data {
  
  
  order: number;
  date: string;
  image:string;
  price: number;
  address:string;
  trackingid:number;
  status: string;
  
 
}

function createData(
  order: number,
  date: string,
  image:string,
  price: number,
  address:string,
  trackingid:number,
  status: string,
): Data {
  return { order, date,image, price,address, status ,trackingid,};
}

const rows:any = [
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  createData(788,'January 23-2023','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4556 , 'hfgsj', 'Processing',7887889888,),
  
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ backgroundColor: 'gray' }}>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                  minWidth: column.minWidth, 
                }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox">
                  {columns.map((column) => {
                    if (column.id === 'actions') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Button variant="contained" className='text-1xl'>Cancle Order</Button>
                          
                        </TableCell>
                      );
                    }
                    if (column.id === 'image') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <img className="rounded-md" src={row[column.id]} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
                        </TableCell>
                      );
                    }         

                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align= {column.align}>
                        {column && typeof value === 'number'
                          ? (value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


