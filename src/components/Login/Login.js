function Login({children}){
  return (
      <div className="flex items-center w-full h-screen overflow-hidden">
         <div className="container mx-auto">
              <div className="max-w-md mx-auto my-10 mb-10">
                  {children}
              </div>
          </div>
      </div>
  );
}
export default Login;