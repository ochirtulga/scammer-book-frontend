# Scammer Search Frontend

A modern, component-based React application built with Next.js for searching and reporting scammer information.

## 🏗️ Architecture & Development Rules

### Component-Based Architecture

**RULE: Everything that could be a component MUST be a component**

- Break down UI into small, reusable components
- Each component should have a single responsibility
- Components should be composable and easily testable
- Prefer composition over inheritance
- Create component variants instead of conditional rendering when possible

### Component Organization

```
src/components/
├── ui/                     # Basic, reusable UI components
│   ├── Button/
│   ├── Input/
│   ├── Modal/
│   ├── Card/
│   └── index.ts           # Export all UI components
├── layout/                # Layout-specific components
│   ├── Header/
│   ├── Footer/
│   ├── Navigation/
│   └── PageLayout/
├── search/                # Search functionality components
│   ├── SearchBar/
│   ├── SearchFilters/
│   ├── SearchResults/
│   └── Pagination/
├── scammer/              # Scammer-specific components
│   ├── ScammerCard/
│   ├── ScammerModal/
│   └── ReportForm/
└── common/               # Common utility components
    ├── LoadingSpinner/
    ├── ErrorBoundary/
    └── SEOHead/
```

### Component Development Guidelines

1. **File Structure**: Each component gets its own folder with:
   ```
   ComponentName/
   ├── index.tsx           # Main component
   ├── ComponentName.tsx   # Implementation (if complex)
   ├── types.ts           # TypeScript types
   ├── styles.module.css  # Component styles (if needed)
   └── __tests__/         # Component tests
   ```

2. **Naming Conventions**:
   - Use PascalCase for component names
   - Use descriptive, self-documenting names
   - Prefix with domain/feature when applicable (e.g., `SearchButton`, `UserAvatar`)

3. **Props Interface**:
   - Always define TypeScript interfaces for props
   - Use descriptive prop names
   - Provide default values when appropriate
   - Make props as specific as possible (avoid `any`)

4. **Component Types**:
   - **UI Components**: Pure, stateless, highly reusable
   - **Feature Components**: Business logic, may have state
   - **Layout Components**: Structure and positioning
   - **Page Components**: Top-level components for routes

### State Management Rules

1. **Local State**: Use `useState` for component-specific state
2. **Global State**: Use Zustand stores for shared application state
3. **Server State**: Use TanStack Query for API data management
4. **Derived State**: Compute from existing state, don't store separately

### Styling Guidelines

1. **Tailwind CSS**: Primary styling approach
2. **Component Variants**: Create variants using Tailwind classes
3. **Custom Styles**: Use CSS modules only when Tailwind isn't sufficient
4. **Responsive Design**: Mobile-first approach with responsive utilities

### Performance Rules

1. **React.memo()**: Wrap components that receive stable props
2. **useMemo()**: For expensive calculations
3. **useCallback()**: For functions passed to child components
4. **Code Splitting**: Use dynamic imports for large components
5. **Image Optimization**: Always use Next.js Image component

### Testing Requirements

1. **Unit Tests**: Test component behavior and props
2. **Integration Tests**: Test component interactions
3. **Accessibility Tests**: Ensure components are accessible
4. **Visual Regression**: Screenshot testing for UI components

### API Integration

1. **TanStack Query**: For all API calls
2. **Error Handling**: Consistent error boundaries and fallbacks
3. **Loading States**: Show loading indicators during API calls
4. **Caching**: Implement proper cache invalidation strategies

### Accessibility Standards

1. **WCAG 2.1 AA**: Minimum compliance level
2. **Semantic HTML**: Use proper HTML elements
3. **ARIA Labels**: For complex interactions
4. **Keyboard Navigation**: Full keyboard accessibility
5. **Screen Reader**: Test with screen readers

### Code Quality Rules

1. **TypeScript**: Strict mode enabled, no `any` types
2. **ESLint**: Follow Next.js recommended rules
3. **Prettier**: Consistent code formatting
4. **Imports**: Use absolute imports with `@/` prefix
5. **Comments**: Document complex logic and business rules

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

## 📦 Dependencies

### Core Dependencies
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework

### State Management
- **TanStack Query**: Server state management
- **Zustand**: Client state management

### UI Components
- **Lucide React**: Icon library
- **Radix UI**: Accessible component primitives (when needed)

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Jest**: Testing framework
- **Testing Library**: React component testing

## 🏃‍♂️ Development Workflow

1. **Create Components**: Start with the smallest UI components
2. **Build Up**: Compose smaller components into larger ones
3. **Test Early**: Write tests as you build components
4. **Document**: Add props documentation and usage examples
5. **Review**: Ensure components follow architecture rules

## 📝 Component Documentation

Each component should include:
- Props interface with descriptions
- Usage examples
- Accessibility considerations
- Performance notes

## 🔧 Build Process

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run type-check   # TypeScript type checking
npm run lint         # ESLint checking

# Testing
npm test            # Run Jest tests
npm run test:watch  # Watch mode for tests

# Production
npm run build       # Build for production
npm start          # Start production server
```

## 📚 Component Library

We maintain a component library approach:
- Each component is self-contained
- Components export TypeScript types
- Storybook documentation (future)
- Consistent API patterns across components

## 🎯 Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔐 Security Guidelines

- Sanitize all user inputs
- Use Content Security Policy headers
- Validate data on both client and server
- Implement proper error boundaries
- Never expose sensitive data in client code

---

**Remember: Every piece of UI should be a reusable component. Think composition over configuration.**