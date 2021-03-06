import React from "react";
import {
  GridOverlay,
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
  GridDensitySelector,
  GridToolbarExport
} from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';
import LinearProgress from '@material-ui/core/LinearProgress';
// import SelectMenu from './SelectMenu'

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridColumnsToolbarButton />
      <GridFilterToolbarButton />
      <GridDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// function CustomPagination(props) {
//   const { state, api } = props;
//   const classes = useStyles();

//   return (
//     <Pagination
//       className={classes.root}
//       color="primary"
//       count={state.pagination.pageCount}
//       page={state.pagination.page + 1}
//       onChange={(event, value) => api.current.setPage(value - 1)}
//       showFirstButton showLastButton 
//     />
//   );
// }

// CustomPagination.propTypes = {
//   /**
//    * GridApiRef that let you manipulate the grid.
//    */
//   api: PropTypes.shape({
//     current: PropTypes.object.isRequired,
//   }).isRequired,
//   /**
//    * The GridState object containing the current grid state.
//    */
//   state: PropTypes.object.isRequired,
// };

const DataTable = ({ nobelPrizes, pageSize, rowsPages, handlePageChange, rowCount }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "firstname", headerName: "Name", width: 150 },
    { field: "born", headerName: "Born", width: 100 },
    { field: "died", headerName: "Died", width: 100 },
    { field: "bornCountry", headerName: "Country", width: 130 },
    { field: "bornCity", headerName: "City", width: 130 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "prizesYear", headerName: "Prize Year", width: 120 },
    { field: "prizesCategory", headerName: "Prize Category", width: 130 },
    { field: "prizesMotivation", headerName: "Prize Motivation", width: 250 },
    { field: "prizesShare", headerName: "Prize Share", width: 130 },
    { field: "affiliationsName", headerName: "Affiliation Place", width: 180 },
    { field: "affiliationsCity", headerName: "Affiliation City", width: 180 },
    { field: "affiliationsCountry", headerName: "Affiliation Country", width: 180 },
  ];

  const rows = nobelPrizes.map((val, i) => {
    return {
      id: val._id,
      firstname: val.firstname,
      born: val.born,
      died: val.died,
      bornCountry: val.bornCountry,
      bornCity: val.bornCity,
      gender: val.gender,
      prizesYear: val.prizes.map((curr) => {
        return curr.year;
      }),
      prizesCategory: val.prizes.map((curr) => {
        return curr.category;
      }),
      prizesMotivation: val.prizes.map((curr) => {
        return curr.motivation;
      }),
      prizesShare: val.prizes.map((curr) => {
        return curr.share;
      }),
      affiliationsName: val.prizes.map((curr) => {
        return curr.affiliations.map((deepCurr) => {
          return deepCurr.name;
        });
      }),
      affiliationsCity: val.prizes.map((curr) => {
        return curr.affiliations.map((deepCurr) => {
          return deepCurr.city;
        });
      }),
      affiliationsCountry: val.prizes.map((curr) => {
        return curr.affiliations.map((deepCurr) => {
          return deepCurr.country;
        });
      }),
    };
  });

  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid
        rows={rows}
        // pagination {...nobelPrizes} 
        // paginationMode="server"
        columns={columns}
        rowsPerPageOptions={rowsPages}
        pageSize={pageSize}
        components={{
          Toolbar: CustomToolbar,
          LoadingOverlay: CustomLoadingOverlay,
          // Pagination: CustomPagination
        }}
        checkboxSelection
        onPageChange={handlePageChange}
      />
      {/* <SelectMenu /> */}
    </div>
  );
};

export default DataTable;

//Rows per page
// rowsPerPageOptions={[10, 20, 30]}