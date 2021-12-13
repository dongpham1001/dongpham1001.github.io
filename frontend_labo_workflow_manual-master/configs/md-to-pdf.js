// TODO: Make md-to-pdf setting

module.exports = {
	// stylesheet: ['path/to/style.css', 'https://example.org/stylesheet.css'],
	// css: `body { color: tomato; }`,
	// body_class: 'markdown-body',
	// marked_options: {
	// 	headerIds: false,
	// 	smartypants: true,
	// },
    script: [
        {
            url: 'https://unpkg.com/mermaid@8.13.3/dist/mermaid.min.js',
        },
        {
            type: 'text/javascript',
            content: 'mermaid.initialize({startOnLoad:true});'
        }
    ],
    // headerTemplate: `<script>mermaid.initialize({startOnLoad:true});</script>`,
	pdf_options: {
		format: 'A5',
		margin: '20mm',
		printBackground: true,
	},
	stylesheet_encoding: 'utf-8',
};
