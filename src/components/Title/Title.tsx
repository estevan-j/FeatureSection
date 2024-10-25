import "./Title.css";
interface TitleProps {
    children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
    return (
        <h2 className="title">
            {children}
        </h2>
    )
}

export default Title
