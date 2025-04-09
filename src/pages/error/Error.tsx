import { Card } from "../../components/card/Card";
import "./Errors.scss";

function ErrorPage() {
  return (
    <Card>
      <div className="error-container">
        <h1>
          Oops... Meme les meilleurs font des erreurs{" "}
        </h1>
        <img src="error.gif" alt="GIF ERROR de la muerte" />
      </div>
    </Card>
  );
}

export default ErrorPage;
