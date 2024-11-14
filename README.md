# Angular Project Structure (Angular v18)

This project structure is designed for Angular v18, optimized for modularity, lazy loading, and efficient styling using Angular Material themes.

## Project Structure

```plaintext
/src
├── /app
│   ├── /core                   # Core module with singleton services
│   │   ├── interceptors        # HTTP interceptors
│   │   ├── guards              # Route guards
│   │   ├── services            # Singleton services (Auth, API, etc.)
│   │   ├── core.module.ts
│   │   └── logger.service.ts
│   ├── /shared                 # Shared modules, components, and directives
│   │   ├── /components
│   │   │   ├── button.component.ts
│   │   │   ├── modal.component.ts
│   │   ├── /directives
│   │   │   ├── defer.directive.ts   # Directive for @defer functionality
│   │   ├── /pipes
│   │   │   └── format.pipe.ts
│   │   ├── shared.module.ts
│   └── /features               # Encapsulated feature modules
│       ├── /dashboard          # Dashboard feature module
│       │   ├── /components
│       │   │   ├── overview.component.ts
│       │   │   ├── stats.component.ts
│       │   ├── /services
│       │   │   └── dashboard.service.ts
│       │   ├── dashboard.module.ts
│       │   ├── dashboard-routing.module.ts
│       └── /profile            # Profile feature module
│           ├── /components
│           │   ├── edit-profile.component.ts
│           │   ├── profile-details.component.ts
│           ├── /services
│           │   └── profile.service.ts
│           ├── profile.module.ts
│           ├── profile-routing.module.ts
│   ├── /layout                 # Global layout components
│   │   ├── /header
│   │   │   └── header.component.ts
│   │   ├── /footer
│   │   │   └── footer.component.ts
│   │   ├── /sidebar
│   │   │   └── sidebar.component.ts
│   │   └── layout.module.ts
│   ├── /pages                  # Routed pages (login, home, etc.)
│   │   ├── /home
│   │   │   ├── home.module.ts
│   │   │   ├── home-routing.module.ts
│   │   │   └── home.component.ts
│   │   ├── /login
│   │   │   ├── login.module.ts
│   │   │   ├── login-routing.module.ts
│   │   │   └── login.component.ts
│   ├── app-routing.module.ts   # Root-level routing
│   ├── app.component.ts
│   ├── app.module.ts
├── /styles                     # Global styles and theme configurations
│   ├── /themes                 # Dedicated folder for Material themes
│   │   ├── _variables.scss      # Customizable variables (colors, fonts, etc.)
│   │   ├── light-theme.scss     # Light theme configuration
│   │   ├── dark-theme.scss      # Dark theme configuration
│   │   ├── high-contrast-theme.scss  # High contrast theme (if needed)
│   │   └── theme.scss           # Main theme file that combines and exports themes
│   └── styles.scss              # Global styles and theme imports
├── /environments               # Environment-specific configurations
│   ├── environment.ts
│   └── environment.prod.ts
└── main.ts
```

## Folder Descriptions

### `/app/core`
Contains core services, interceptors, and guards. This module is imported once in the root `AppModule` and provides singleton services that can be accessed across the application.

### `/app/shared`
Contains reusable components, directives, and pipes. Shared items are designed to be used across multiple modules without creating duplicate instances.

### `/app/features`
Each feature (e.g., `dashboard`, `profile`) is isolated into its own module with its components, services, and routing configuration. This modular structure optimizes lazy loading and application scalability.

### `/app/layout`
Layout components like headers, footers, and sidebars are organized here to provide a consistent structure across different views.

### `/app/pages`
Contains routed pages such as `home` and `login`, each as a standalone module for optimized lazy loading and SSR support.

### `/styles/themes`
Defines and configures Angular Material themes. The themes are separated into individual files:

- **`_variables.scss`**: Common variables for theme customization.
- **`light-theme.scss`**: Styles for light theme.
- **`dark-theme.scss`**: Styles for dark theme.
- **`high-contrast-theme.scss`** (optional): For users needing high contrast.
- **`theme.scss`**: Combines and exports the theme configurations.

### `/styles/styles.scss`
Global styles and theme imports are configured here to apply across the application.

### `/environments`
Environment-specific configuration files (`environment.ts` for development and `environment.prod.ts` for production) manage variables like API endpoints and feature flags.

## Theme Setup Instructions

1. Define custom variables in `_variables.scss` for easy theming across different files.
2. Configure individual themes in `light-theme.scss`, `dark-theme.scss`, and other theme files.
3. Import `theme.scss` into `styles.scss` to apply global styling and theming.

This structure enables scalable, maintainable, and performant Angular applications aligned with best practices for Angular v18.
```
