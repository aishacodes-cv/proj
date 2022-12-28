import React, {ReactElement} from "react";
import Logo from "../../atoms/vectors/Logo";
import "./AuthLayout.scss";

const AuthLayout = ({children}: {children: ReactElement}) => {
  return (
    <div className="Auth">
      <aside className="Auth">
        <Logo />
        <div className="flex-grow flex items-center px-[2.4125rem]">
          <img src="/vectors/auth-illustration.svg" alt="auth illustration" />
        </div>
      </aside>
      <section className="flex-1 flex-grow px-6">{children}</section>
    </div>
  );
};

export default AuthLayout;
