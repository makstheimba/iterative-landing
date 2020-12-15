# Pricing page

## Pricingcard 
[Figma](https://www.figma.com/file/m3nYO4Yg9kLTGWvzoHrPKY/Iterative.ai?node-id=44%3A845)

```javascript
PricingCard.propTypes = {
    title: PropTypes.string.isRequired, // the title should be displayed using common Title component
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footer: PropTypes.element.isRequired // custom react element that can be displayed at card footer
}
```

## Assemble Pricing page

Use common components to assemble pricing page.
Required components: Header, Title, PricingCard, Footer, Layout