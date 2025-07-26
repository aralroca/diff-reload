# Diff-Reload 🔄✨  

**A lightweight JavaScript library for efficient partial DOM updates and seamless HTML streaming integration.**  

## Features  

- **Smart DOM Diffing**: Only updates the parts of the page that have changed, minimizing re-renders.  
- **HTML Streaming Support**: Works seamlessly with streaming HTML responses for faster perceived load times.  
- **Transitions**: Option to enable transitions of each HTML Streaming chunk via `document.startViewTransition`.

## Installation  

### Via NPM  

```bash  
npm install diff-reload  
```    

### Via BUN  

```bash  
bun install diff-reload  
```    

## Usage  

### Basic Setup 

Enable diffing on page updates:  

```javascript  
import reload from 'diff-reload';  

await reload();  
```  

### With transitions

Enable transitions of each HTML Streaming chunk via `document.startViewTransition`:

```javascript  
import reload from 'diff-reload';  

await reload({ transition: true });  
```  

## Diffing Algorithm

Uses https://github.com/brisa-build/diff-dom-streaming diffing algorithm.

## Contributing

See [Contributing Guide](CONTRIBUTING.md) and please follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE)