type Props = {
    title: string,
    degrees: string,
    imageUrl: string

}

export default function MiddleInfoItems({title, degrees, imageUrl}: Props){

    let value;
    if (title.startsWith("Temp")) {
        value = `${degrees}°`;
      } else if (title.startsWith("Humidity") || title.startsWith("Cloudy")) {
        value = `${degrees}%`;
      } else if (title.startsWith("Wind")) {
        value = `${degrees} km/h`;
      } else {
        value = degrees;
      }
    return <div className="flex justify-between pt-10">
    <p>{title}</p>
    <p className="pl-40">{value}</p>

    
    <img src={imageUrl} alt={title} />
</div>
}