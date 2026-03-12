export default function Toggle({light, dark, istoggle}) {
    if(istoggle === true) {
        return <a href="#">{light}</a>;
    } else {
        return <a href="#">{dark}</a>
    }
}