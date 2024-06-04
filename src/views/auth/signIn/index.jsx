import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
// import { Logo } from './logo'
import { PasswordField } from "./PasswordField";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import logo from 'assets/img/logoMakeda.png'; 
import { loginRequest } from "redux/login/action";

const CameroonFlag = () => (
  // Ajoutez ici le composant d'icône du drapeau du Cameroun
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/langfr-225px-Flag_of_Cameroon.svg.png"
    alt="Drapeau du Cameroun"
    w={8}
    h={6}
    borderRadius={3}
  />
);

const SignIn = ({ error }) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    setPhoneError("");
    setPasswordError("");

    // Vérifiez les champs manquants et mettez à jour les messages d'erreur
    if (!phoneNumber) {
      setPhoneError("Veuillez entrer votre numéro de téléphone.");
    }

    if (!password) {
      setPasswordError("Veuillez entrer votre mot de passe.");
    }

    // Si des champs sont manquants, arrêtez la procédure de connexion
    if (!phoneNumber || !password) {
      return;
    }

    setIsLoading(true);

    try {
      dispatch(loginRequest(phoneNumber, password));
      // Simulez une attente (remplacez cela par votre logique de connexion réelle)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Une fois la connexion réussie ou échouée, arrêtez le chargement
      setIsLoading(false);
    } catch (error) {
      // Gérer les erreurs ici
      setIsLoading(false);
    }
  };

  return (
    <Container
      maxW="lg"
      py={{
        base: "12",
        md: "2",
      }}
      px={{
        base: "0",
        sm: "8",
      }}
    >
      <Stack spacing="8">
        <Stack align="center" justifyContent='center'>
          <Image
            src={logo}
            width={{base:100, lg: 300}}
            height={{base:100, lg: 200}}
            objectFit='contain'
          />
          <Stack
            textAlign="center"
          >
            <Heading
              size={{
                base: "xs",
                md: "sm",
              }}
            >
              Connectez-vous à votre compte
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={{
            base: "transparent",
            sm: "gray.100",
          }}
          boxShadow={{
            base: "none",
            sm: "md",
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel htmlFor="phone-number">
                  Numero de téléphone
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CameroonFlag phoneNumber={phoneNumber} />
                  </InputLeftElement>
                  <Input
                    id="phone-number"
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </InputGroup>
                {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
              </FormControl>
              <PasswordField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </Stack>
            <Stack spacing="6">
              <Button
                bg="gray"
                color="white"
                isLoading={isLoading}
                loadingText="Connexion"
                spinnerPlacement="end"
                _hover={{ bg: "gray.500", color: "white" }}
                onClick={handleLogin}
              >
                Connexion
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

const mapStateToProps = ({ LoginReducer }) => ({
  token: LoginReducer.token,
  loading: LoginReducer.loading,
  error: LoginReducer.error,
});

export default connect(mapStateToProps)(SignIn);
