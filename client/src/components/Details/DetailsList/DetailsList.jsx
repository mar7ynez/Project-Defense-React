
const DetailsList = ({ detailsContent }) => {
    return (
        <div className='list-wrapper'>
            <ul>
                {Object.keys(detailsContent).map(key => <li key={key}>{key} - {detailsContent[key]}</li>)}
            </ul>
        </div>
    );
};

export default DetailsList;