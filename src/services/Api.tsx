import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://103.1.100.53:5000";

const getAccessToken = async () => {
  const UserDetails = await AsyncStorage.getItem("UserDetails");
  const finalUserDetails = JSON.parse(UserDetails);
  return finalUserDetails.data;
};

export const SignUp = (
  first_name: string,
  last_name: string,
  email: string,
  login_with: string
) => {
  const URL = BASE_URL + "/auth/signup";

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      login_with: login_with,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(URL, data, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

const LogIn = async (email: string, password: string) => {
  const URL = BASE_URL + "/auth/signin";

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      email: email,
      password: password,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(URL, data, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const ForgotPassword = (email: string) => {
  const URL = BASE_URL + "/auth/forgotPassword";

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      email: email,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(URL, data, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const VerifyOtp = (otp: number, email: string) => {
  const URL = BASE_URL + "/auth/verify-otp";

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      otp: otp,
      email: email,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(URL, data, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const SetPassword = (password: string, email: string) => {
  const URL = BASE_URL + "/auth/setPassword";

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      password: password,
      email: email,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(URL, data, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const Person = (
  PersonType: string,
  Name: string,
  Candidate_Source: string,
  Vendor_Company: number,
  Salary: number,
  Experience: string,
  PhoneNo: number,
  PhoneType: number,
  CountryCode: number,
  EmailType: number,
  EmailAddress: string,
  Skill: number,
  Photo: string,
  PhotoType: number,
  Document: string
) => {
  const URL = BASE_URL + "/contact/person";

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    console.log(access_token);
    const formData = new FormData();
    formData.append(" PersonType", PersonType  );
    formData.append(" Name", Name);
    formData.append("Candidate_Source", Candidate_Source);
    formData.append("Vendor_Company", Vendor_Company + "");
    formData.append("Salary", Salary + "");
    formData.append("Experience", Experience);
    formData.append(" PhoneNo", PhoneNo + "");
    formData.append(" PhoneType", PhoneType + "");
    formData.append(" CountryCode", CountryCode + "");
    formData.append("EmailType", EmailType + "");
    formData.append("EmailAddress", EmailAddress);
    formData.append("Skill", Skill + "");
    formData.append("Photo", Photo);
    formData.append("PhotoType", PhotoType + "");
    formData.append("Document", Document);

    const options = {
      headers: {
        "Content-Type":
          "multipart/form-data",
        Authorization: access_token,
      },
    };

    axios
      .post(URL, formData, options)
      .then(async (response) => {
        resolve(response);
        console.log(access_token);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const PersonClient = (
  PersonType: number,
  Name: string,
  Client_Company: number,
  PhoneNo: number,
  PhoneType: number,
  CountryCode: number,
  EmailType: number,
  EmailAddress: string,
  Photo: string,
  PhotoType: number,
  Requirement: string
) => {
  const URL = BASE_URL + "/contact/person";

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      PersonType: PersonType,
      Name: Name,
      Client_Company: Client_Company,
      PhoneNo: PhoneNo,
      PhoneType: PhoneType,
      CountryCode: CountryCode,
      EmailType: EmailType,
      EmailAddress: EmailAddress,
      Photo: Photo,
      PhotoType: PhotoType,
      Requirement: Requirement,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(URL, data, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const PersonVendor = (
  PersonType: number,
  Name: string,
  Vendor_Company: number,
  PhoneNo: number,
  PhoneType: number,
  CountryCode: number,
  EmailType: number,
  EmailAddress: string,
  Photo: string,
  PhotoType: number
) => {
  const URL = BASE_URL + "/contact/person";

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      PersonType: PersonType,
      Name: Name,
      Vendor_Company: Vendor_Company,
      PhoneNo: PhoneNo,
      PhoneType: PhoneType,
      CountryCode: CountryCode,
      EmailType: EmailType,
      EmailAddress: EmailAddress,
      Photo: Photo,
      PhotoType: PhotoType,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(URL, data, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const AllPerson = () => {
  const URL = BASE_URL + "/contact/person";

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    };
    axios
      .get(URL, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const Static = () => {
  const URL = BASE_URL + "/contact/staticData";

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    };
    axios
      .get(URL, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};

export const PersonSearch = () => {
  const URL = BASE_URL + "/contact/personSearch?";

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    };
    axios
      .get(URL, options)
      .then(async (response) => {
        resolve(response);
      })
      .catch(({ error, response }) => {
        resolve(response);
      });
  });
};
export default LogIn;
