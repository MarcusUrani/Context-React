import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UsuarioContext } from "common/Context/Usuario";
import { useContext } from "react";

function Login() {
  const history = useHistory();
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          type="text"
          value={nome}
          required
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          value={saldo}
          required
          onChange={(event) => {
            setSaldo(event.target.value);
          }}
        />
      </InputContainer>
      <Button
        disabled={nome.length < 3}
        variant="contained"
        color="primary"
        onClick={() => history.push("/feira")}
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
