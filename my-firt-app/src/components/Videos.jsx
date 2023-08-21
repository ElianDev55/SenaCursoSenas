export default function Video({ video }) {
    const { name, description } = video;

    return (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
    )
}