interface IconFeatProps {
    color: string;
    text: string;
}

const IconFeat = ({ color, text }: IconFeatProps) => {
    return (
        <div style={{
            backgroundColor:
                color, borderRadius: "50%", width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            {text}
        </div>
    )
}

export default IconFeat
