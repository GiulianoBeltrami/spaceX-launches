const Title = {
    renderH3 : (title) =>{
        return (
            <h3 className="text-primary d-inline pe-1">{title}</h3>
        );
    },

    renderH6 : (title) => {
        return (
            <h6 className="text-capitalize d-inline">{title}</h6>
        );
    }
}

const Paragraph = {
    render : (paragraph) => {
        return (
            <p className="lead d-inline">{paragraph}</p>
        );
    },

    renderhWithAnchorToWikipedia : (anchor) => {
        return (
            <p className="lead d-inline">
                {Anchor.renderToWikipedia(anchor)}
            </p>
        )
    }
}

const Anchor = {
    renderToWikipedia : (anchor) => {
        return (
            <a target="_blank" className="text-dark" rel="noreferrer" href={`https://pt.wikipedia.org/wiki/${anchor}`}>
                {anchor}
            </a>
        )
    },

    renderToCustomAnchor : (href,text) =>{
        return (
            <a target="_blank" className="text-dark" rel="noreferrer" href={href}>
                {Paragraph.render(text)}
            </a>
        )
    }
}

const HomepageHelper = {
    Title: () => Title,
    Paragraph: () => Paragraph,
    Anchor: () => Anchor,
}

export default HomepageHelper;

