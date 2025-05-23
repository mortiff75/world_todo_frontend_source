import Pagination from "@mui/material/Pagination";
import * as classes from "./Pagination.module.css";
export default function PaginationRounded({ count, page, onChange }) {
  return (
    <div className={classes.pagination}>
      <Pagination
        style={{ margin: "60px auto" }}
        count={count}
        shape="rounded"
        page={page}
        color="primary"
        onChange={(_, index) => {
          onChange(index);
        }}
      />
    </div>
  );
}
