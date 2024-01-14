import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login-image.png";
import styles from "./Login.module.css";
import MemberLoginModal from "./Modal/MemberLoginModal";

function Login({ onClose }) {
  //request body

  //

  // const handleAdd = async () => {
  //     const userData = {
  //         name: name,
  //         login_id: loginId,
  //         password: password,
  //         phone_num: phoneNumber
  //     };
  //
  //     const idCheck = /^[a-z]+[a-z0-9]{5,19}$/g;
  //     const korean = /^[가-힣]+$/;
  //     const passwordCheck = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/;
  //     const telCheck = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  //     const idCheckResponse = await fetch(`${process.env.REACT_APP_AUTH_SERVER}/checkLoginId?loginId=${loginId}`);
  //     const isIdDuplicate = await idCheckResponse.json();
  //
  //     if (loginId === "" || password === "" || name === "" || phoneNumber === "" || confirmPassword === "" || selectedHydrogenCenter === null) {
  //         alert("공백란 확인 후 다시 작성해주세요.");
  //     } else if (!passwordCheck.test(password)) {
  //         alert("비밀번호는 5글자 이상이며, 특수문자를 하나 이상 포함해야 합니다.");
  //     } else if (password !== confirmPassword) {
  //         alert("비밀번호와 비밀번호 확인이 일치하지않습니다");
  //     } else if (!idCheck.test(loginId)) {
  //         alert("아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
  //     } else if (!korean.test(name)) {
  //         alert("이름은 한글만 입력할 수 있습니다.");
  //     } else if (phoneNumber.length > 11 || !telCheck.test(phoneNumber)) {
  //         alert("전화번호는 11자리 이하의 숫자로만 입력해주세요.");
  //     } else if (isIdDuplicate) {
  //         alert("이미 사용 중인 아이디입니다. 다른 아이디를 선택해주세요.");
  //     } else {
  //         fetch(`${process.env.REACT_APP_AUTH_SERVER}/addUser`, {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(userData),
  //         })
  //             .then(response => response.json())
  //             .then(data => {
  //                 console.log(data);
  //                 if (data.success) {
  //                     console.log("User added successfully");
  //                     onClose();
  //                     alert("사용자 정보가 성공적으로 등록되었습니다.");
  //                 } else {
  //                     console.error("Failed to add user");
  //                     console.error("Error message: " + data.message);
  //                 }
  //             })
  //             .catch(error => {
  //                 console.error('Error:', error);
  //             });
  //     }
  // };

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [ismemberloginOpen, setMemberloginOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginIdChange = (event) => {
    setLoginId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleButton = (event) => {
    // navigate('/main');
  };

  const handleMemberButton = (event) => {
    setMemberloginOpen(true);
  };

  return (
    <Container maxWidth="sm" className={styles.loginContainer}>
      <Box sx={{ mt: 4, mb: 4 }} className={styles.loginBox}>
        <Box className={styles.loginHeader}>
          <Typography variant="h4" gutterBottom className={styles.formTitle}>
            로그인
          </Typography>
          <img className={styles.loginLogo} src={loginImage} alt="Login" />
        </Box>
        <Box className={styles.textContainer}>
          <TextField
            label="아이디"
            variant="outlined"
            fullWidth
            margin="normal"
            value={loginId}
            onChange={handleLoginIdChange}
            placeholder="아이디를 입력하세요."
            className="form-input"
          />

          <TextField
            label="비밀번호"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호 입력"
            className="form-input"
          />
        </Box>

        <Box
          sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
          className={styles.buttonsBox}
        >
          <Button
            variant="outlined"
            className={styles.cancelButton}
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.createButton}
            onClick={handleButton}
          >
            만들기
          </Button>
          <Button className={styles.memberButton} onClick={handleMemberButton}>
            회원가입
          </Button>
        </Box>
      </Box>
      {ismemberloginOpen && (
        <MemberLoginModal onClose={() => setMemberloginOpen(false)} />
      )}
    </Container>
  );
}

export default Login;
