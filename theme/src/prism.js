import Prism from 'prismjs/components/prism-core'

// Add syntax highlighting support for ruby and erb
// Reference: https://github.com/FormidableLabs/prism-react-renderer#faq
(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/");

export default Prism
