# Utility Nodes

Helper nodes for common operations.

## Image Operations

### ImageChannelMerge

Merge separate R, G, B, A channels.

```
Inputs:
  - R channel
  - G channel
  - B channel
  - A channel (optional)

Output:
  - Combined RGBA image
```

### ImageChannelSplit

Split image into separate channels.

```
Input:
  - RGBA image

Outputs:
  - R channel
  - G channel
  - B channel
  - A channel
```

## Math Operations

### Math

Basic mathematical operations.

| Operation | Description |
|-----------|-------------|
| add | Addition |
| subtract | Subtraction |
| multiply | Multiplication |
| divide | Division |
| power | Exponentiation |
| modulo | Remainder |

### Boolean Operations

| Operation | Description |
|-----------|-------------|
| AND | Both true |
| OR | Either true |
| NOT | Invert |
| == | Equal |
| != | Not equal |

## String Operations

### String Literal

Fixed text output.

```
Parameters:
  - text: Your text

Output:
  - String constant
```

### String Concatenate

Join multiple strings.

```
Inputs:
  - string A
  - string B

Output:
  - "A" + "B"
```

### String Replace

Replace text in string.

```
Input: Original text
Find: Text to find
Replace: New text

Output: Modified text
```

## Image Processing

### ImageToMask

Convert image to mask.

```
Inputs:
  - image

Parameters:
  - channel: R/G/B/A

Output:
  - Grayscale mask
```

### MaskToImage

Convert mask back to image.

### Threshold

Binarize mask.

```
Input: Grayscale mask
Parameters:
  - value: Threshold (0-255)

Output:
  - Binary mask
```

## Random Values

### RandomNumber

Generate random numbers.

```
Parameters:
  - min: Minimum value
  - max: Maximum value
  - seed: Random seed

Output:
  - Random number
```

## Workflow Helpers

### Note

Add text notes to workflow.

### Preview

Quick preview of any image.

### PreviewLabel

Show labeled preview.

## Tips

1. **Use for automation**: Reduce manual adjustments
2. **Combine with Conditionals**: Create dynamic workflows
3. **Debugging**: Use notes to explain workflow

## Next Steps

- [Impact Pack](./impact-pack) - Advanced features
- [Core Nodes](../core/) - Built-in nodes