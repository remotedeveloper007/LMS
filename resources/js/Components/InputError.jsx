export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-danger' + className}>
            <i className="text-danger ml-2">{message}</i>
        </p>
    ) : null;
}