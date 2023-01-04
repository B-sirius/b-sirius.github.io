// 外链
const InboundLink = ({ className, href, children }) => (
    <a
        className={className}
        rel="noopener noreferrer"
        target="_blank"
        href={href}>
        {children}
    </a>
);

export default InboundLink;
