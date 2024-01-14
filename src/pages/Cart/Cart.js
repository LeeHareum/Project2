import React from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <Container maxWidth="sm" className={styles.cartContainer}>
      <Box className={styles.header}>
        <Typography variant="h4" className={styles.title}>
          장바구니
        </Typography>
      </Box>

      <Box className={styles.searchContainer}>
        <Button
          variant="contained"
          color="primary"
          className={styles.searchButton}
        >
          검색
        </Button>
      </Box>

      <Typography variant="subtitle1" className={styles.notice}>
        장바구니에 저장된 상품이 없습니다
      </Typography>
      <Box className={styles.totalContainer}>
        <Typography variant="subtitle1">총 결제예정금액: 0원</Typography>
        <Button
          variant="contained"
          color="secondary"
          className={styles.checkoutButton}
        >
          결제하기
        </Button>
      </Box>
    </Container>
  );
}

export default Cart;
