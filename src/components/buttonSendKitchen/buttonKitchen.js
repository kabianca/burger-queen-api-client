import "./buttonKitchen.css";

const Button = ({ Text, onClick, Type = "button" }) => {
    return (
      <Button type={Type} onClick={onClick}>
        {Text}
      </Button>
    );
  };
