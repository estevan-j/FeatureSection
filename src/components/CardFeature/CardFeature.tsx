import IconFeat from "../IconFeat/IconFeat";
import "./CardFeature.css";
interface CardFeatureProps {
    number: string;
    title: string;
    content: string;
}

const icons = [
    {
        number: "1",
        color: "#FDEED9",
        text: "✋"
    },
    {
        number: "2",
        color: "#DEE9FB",
        text: "🥅"
    },
    {
        number: "3",
        color: "#FBE5E7",
        text: "💬"
    }
]

const CardFeature = ({ number, title, content }: CardFeatureProps) => {
    return (
        <div className="CardFeat">
            <IconFeat color={
                icons.find(icon => icon.number == number)?.color || "#FBE5E7"
            } text={icons.find(icons => icons.number == number)?.text || ""} />
            <h3>
                {title}
            </h3>
            <p>
                {content}
            </p>
            <img src={`/public/photo_${number}@2x.png`} alt="content-img" />
        </div>
    )
}

export default CardFeature
