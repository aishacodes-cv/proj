import { Span } from "../../../atoms/Typography"
import DocFileIcon from "../../../atoms/vectors/DocFileIcon"
import PdfIcon from "../../../atoms/vectors/PdfIcon"
import XLSFileIcon from "../../../atoms/vectors/XLSFileIcon"
import TabContent from "./FileTab"

const fileList = [
    {
        name: 'Notion credentials.docx',
        img: <DocFileIcon />,
        description: 'Shared by Trevor Noah on Sep 15th, 2021',
    },
    {
        name: 'Payslip - November.xls',
        img: <XLSFileIcon />,
        description: 'Shared by Trevor Noah on Sep 15th, 2021',
    },
    {
        name: 'Payslip - November.pdf',
        img: <PdfIcon />,
        description: 'EMPLOYMENT AGREEMENT.pdf',
    },
    {
        name: 'Notion credentials.docx',
        img: <DocFileIcon />,
        description: 'Shared by Trevor Noah on Sep 15th, 2021',
    },
    {
        name: 'Payslip - November.xls',
        img: <XLSFileIcon />,
        description: 'Shared by Trevor Noah on Sep 15th, 2021',
    },
    {
        name: 'Payslip - November.pdf',
        img: <PdfIcon />,
        description: 'EMPLOYMENT AGREEMENT.pdf',
    },
]

const Files = () => {
    return (
        <>
            <TabContent 
                list={fileList}
            />
        </>
    )
}
export default Files