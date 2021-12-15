const Title = {
    render : (title) => {
        return (
            <h6 className="text-capitalize d-inline">{title}: </h6>
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
    }
}

const HomepageHelper = {
    Title: () => Title,
    Paragraph: () => Paragraph,
}

export default HomepageHelper;

