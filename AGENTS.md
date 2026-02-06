# AGENTS.md

This file contains guidelines for agentic coding agents working in this Next.js 15 codebase.

## Project Overview

This is a Next.js 15 application with App Router and React 19 RC, using TypeScript with strict mode enabled. The project follows modern web development best practices with a focus on type safety, accessibility, and component reusability.

**Key Technologies:**
- Next.js 15.0.3 with App Router
- React 19.0.0-rc-66855b96-20241106
- TypeScript with strict mode
- Tailwind CSS with custom design system
- Radix UI primitives with custom wrappers
- Class Variance Authority (CVA) for component variants
- React Hook Form with Zod validation
- TipTap for rich text editing

## Build/Test/Lint Commands

```bash
# Development
npm run dev          # Start development server with Turbopack

# Building
npm run build        # Production build
npm run start        # Production server

# Code Quality
npm run lint         # ESLint with Next.js configuration
```

**Note**: No test framework is currently configured. Add testing setup before implementing tests.

## Code Style Guidelines

### File Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives (Button, Input, Label, etc.)
│   ├── form/            # Form-related components
│   ├── features/        # Feature-specific components
│   └── [feature]/       # Component organization by feature
├── app/                 # Next.js App Router pages
├── lib/                 # Utilities and helpers
└── types/               # TypeScript type definitions
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `Label`, `InputField`)
- **Files**: kebab-case for utilities, PascalCase for components (e.g., `button.tsx`, `input-field.tsx`)
- **TypeScript interfaces**: PascalCase with descriptive names (e.g., `ButtonProps`, `UserFormData`)
- **CSS classes**: Tailwind utility classes with custom design tokens
- **Variables/functions**: camelCase

### Component Patterns

All components should follow this consistent pattern:

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "variant-classes",
      // ... other variants
    },
    size: {
      default: "size-classes",
      // ... other sizes
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

export interface ComponentProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof componentVariants> {
  asChild?: boolean
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"

export { Component, componentVariants }
```

### TypeScript Configuration

- **Strict mode**: Always enabled (`"strict": true`)
- **Path aliases**: Use `@/*` for `./src/*` imports
- **React 19**: Latest features and patterns
- **Type checking**: Run `npm run lint` before committing

### Styling Guidelines

**Design System**:
- Uses CSS custom properties for theming (HSL color space)
- Dark mode support via class-based approach
- Consistent spacing, border radius, and typography scales

**Tailwind Configuration**:
- Custom color tokens (background, foreground, primary, secondary, etc.)
- CSS custom properties for design tokens
- `tailwindcss-animate` plugin for animations

**Component Styling**:
- Use the `cn()` utility for class merging (`clsx` + `tailwind-merge`)
- Follow existing design token patterns
- Maintain responsive design with Tailwind breakpoints

### Error Handling

- **TypeScript**: Leverage strict mode for compile-time errors
- **Runtime validation**: Use Zod for data validation
- **Component errors**: Handle gracefully with proper fallbacks
- **API errors**: Implement proper error boundaries and user feedback

## Key Dependencies

### UI Library
- **@radix-ui/react-***: Accessible primitives (Dialog, Label, Popover, etc.)
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### State Management
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation with Zod
- **@tiptap/**: Rich text editor

### Styling
- **tailwindcss**: Utility-first CSS framework
- **tailwind-merge**: Class merging utility
- **clsx**: Conditional class utility

## Development Workflow

### Adding New Components
1. Create component in appropriate directory (`src/components/ui/` for primitives)
2. Follow established component pattern with CVA
3. Add proper TypeScript interfaces
4. Include forward ref pattern
5. Export component and variants

### Modifying Existing Components
1. Read existing component code first
2. Follow established patterns and conventions
3. Update TypeScript interfaces if needed
4. Maintain backward compatibility when possible
5. Run linting and type checking

### Code Quality
1. Always run `npm run lint` before committing
2. Ensure TypeScript compilation passes
3. Follow existing code patterns and conventions
4. Use proper error handling and validation
5. Maintain accessibility standards

## Path Aliases

Use `@/*` for imports from the `src` directory:

```typescript
// Correct
import { cn } from "@/lib/utils"
import Button from "@/components/ui/button"

// Incorrect
import { cn } from "../lib/utils"
import Button from "../../components/ui/button"
```

## Component Architecture

### UI Components
- Located in `src/components/ui/`
- Focus on reusability and accessibility
- Use Radix UI primitives as base
- Implement variant system with CVA

### Feature Components
- Located in `src/components/features/` or feature-specific directories
- Follow business logic and domain patterns
- May use UI components as building blocks
- Implement proper state management

### App Router Pages
- Located in `src/app/` following Next.js App Router structure
- Use server components by default
- Add `"use client"` directive only when necessary
- Implement proper metadata and SEO

## Accessibility Standards

- Use Radix UI primitives for accessible base components
- Implement proper ARIA attributes
- Ensure keyboard navigation support
- Test with screen readers
- Follow WCAG guidelines

## Performance Considerations

- Use Next.js Image component for optimized images
- Implement proper loading states
- Consider bundle size when adding dependencies
- Use React.memo for expensive components
- Implement code splitting where appropriate

## Security Best Practices

- Never commit secrets or API keys
- Use environment variables for configuration
- Validate all user inputs with Zod
- Implement proper authentication and authorization
- Follow OWASP guidelines for web security

## Testing Strategy

While no test framework is currently configured, plan for:
- Unit tests for utility functions
- Component tests for UI components
- Integration tests for features
- E2E tests for user workflows
- Visual regression tests for UI consistency

When adding tests, use established patterns and maintain high coverage for critical functionality.