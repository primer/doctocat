import Prism from 'prismjs/components/prism-core'

// Add syntax highlighting support for ruby and erb
// Reference: https://github.com/FormidableLabs/prism-react-renderer#faq
(typeof global !== "undefined" ? global : window).Prism = Prism

// Core languages
require("prismjs/components/prism-clike");
require("prismjs/components/prism-markup");
require("prismjs/components/prism-markup-templating");

// Supported languages
require("prismjs/components/prism-bash");
require("prismjs/components/prism-css");
require("prismjs/components/prism-diff");
require("prismjs/components/prism-go");
require("prismjs/components/prism-json");
require("prismjs/components/prism-markdown");
require("prismjs/components/prism-yaml");

// JS like
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-tsx");

// Ruby like
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-erb");

export default Prism
