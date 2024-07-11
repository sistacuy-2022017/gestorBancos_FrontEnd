import React, { useState } from "react";
import { Input } from "./Input.jsx"; // Asegúrate de que la ruta sea correcta
import "./Login.css"; // Asegúrate de crear y enlazar este archivo CSS
import AnimatedBackground from "./AnimatedBackground.jsx";
import { useRegister } from "../shared/hooks/index.js"; // Importamos el hook useRegister

export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister(); // Utilizamos el hook useRegister

  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    DPI: '',
    email: '',
    direction: '',
    phone: '',
    workName: '',
    workDirection: '',
    typeAccount: 'DEBIT', // Valor por defecto
    income: 0.00 // Valor por defecto
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    nickname: '',
    DPI: '',
    email: '',
    direction: '',
    phone: '',
    workName: '',
    workDirection: ''
  });

  const handleInputChange = (value, field) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleInputBlur = (value, field) => {
    if (!value && ['name', 'nickname', 'DPI', 'email', 'direction', 'phone', 'workName', 'workDirection'].includes(field)) {
      setFormErrors({ ...formErrors, [field]: `${field} is required` });
    } else {
      setFormErrors({ ...formErrors, [field]: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar aquí si hay errores antes de llamar a register
    const hasErrors = Object.values(formErrors).some(error => error !== '');
    if (hasErrors) {
      return; // Mostrar mensaje de errores si es necesario
    }

    // Llamar a la función register con los datos del formulario
    register(formData);
  };

  return (
    <AnimatedBackground>
      <div className="form-container">
        <div className="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto bg-white rounded-md shadow-2xl overflow-hidden">
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center relative">
            <div className="bg-black opacity-20 inset-0 z-0 absolute"></div>
            <div className="w-full mx-auto px-10 lg:px-20 flex-col items-center space-y-6 relative z-10">
              <h1 className="text-white font-bold text-4xl font-sans text-center lg:text-left">
                Infinity Trust Bank
              </h1>
              <p className="text-white mt-1 text-center lg:text-left">The simplest app to use</p>
              <div className="flex justify-center lg:justify-start mt-6">
                <a
                  href="/"
                  className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                >
                  Home Page
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center bg-white p-8 lg:p-16 space-y-4"> {/* Cambiado space-y-8 a space-y-4 */}
            <div className="w-full">
              <form className="bg-white rounded-md shadow-2xl p-5" onSubmit={handleSubmit}>
                <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center lg:text-left">
                  Welcome!
                </h1>
                <p className="text-sm font-normal text-gray-600 mb-4 text-center lg:text-left"> {/* Cambiado mb-8 a mb-4 */}
                  Create your account
                </p>
                <div className="flex flex-wrap -mx-3"> {/* Cambiado de flex-col lg:flex-row a flex-wrap */}
                  <div className="w-full lg:w-1/2 px-3 mb-3"> {/* Cambiado mb-5 a mb-3 */}
                    <Input
                      field="name"
                      label="Name"
                      type="text"
                      value={formData.name}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.name}
                      validationMessage={formErrors.name}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3"> {/* Cambiado mb-5 a mb-3 */}
                    <Input
                      field="nickname"
                      label="Nickname"
                      type="text"
                      value={formData.nickname}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.nickname}
                      validationMessage={formErrors.nickname}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3"> {/* Cambiado mb-5 a mb-3 */}
                    <Input
                      field="DPI"
                      label="DPI"
                      type="text"
                      value={formData.DPI}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.DPI}
                      validationMessage={formErrors.DPI}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3"> {/* Cambiado mb-5 a mb-3 */}
                    <Input
                      field="email"
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.email}
                      validationMessage={formErrors.email}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3"> {/* Cambiado mb-5 a mb-3 */}
                    <Input
                      field="direction"
                      label="Direction"
                      type="text"
                      value={formData.direction}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.direction}
                      validationMessage={formErrors.direction}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3"> {/* Cambiado mb-5 a mb-3 */}
                    <Input
                      field="phone"
                      label="Phone"
                      type="text"
                      value={formData.phone}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.phone}
                      validationMessage={formErrors.phone}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3"> {/* Cambiado mb-5 a mb-3 */}
                    <Input
                      field="workName"
                      label="Work Name"
                      type="text"
                      value={formData.workName}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.workName}
                      validationMessage={formErrors.workName}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3"> {/* Cambiado mb-5 a mb-3 */}
                    <Input
                      field="workDirection"
                      label="Work Direction"
                      type="text"
                      value={formData.workDirection}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.workDirection}
                      validationMessage={formErrors.workDirection}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3">
                    <Input
                      field="typeAccount"
                      label="Type of Account"
                      type="text"
                      value={formData.typeAccount}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.typeAccount}
                      validationMessage={formErrors.typeAccount}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-3">
                    <Input
                      field="income"
                      label="Income"
                      type="number"
                      step="0.01"
                      value={formData.income}
                      onChangeHandler={handleInputChange}
                      onBlurHandler={handleInputBlur}
                      showErrorMessage={formErrors.income}
                      validationMessage={formErrors.income}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Register Now'}
                </button>
                <div className="flex justify-between mt-4">
                  <a
                    className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                    onClick={switchAuthHandler}
                  >
                    Already have an account?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

