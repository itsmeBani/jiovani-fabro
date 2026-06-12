
import pdf from "../assets/JIOVANI_FABRO_RESUME_V2.pdf"
function ViewResume() {
    return (
        <embed
            src={pdf}
            type="application/pdf"
            width="100%" contentEditable={false}
            className={"h-[100dvh]"}
        />
    );
}
export default ViewResume;
