import re

with open('src/styles/global.css', 'r') as f:
    css = f.read()

# Fix desktop .values-grid p
css = re.sub(r'(\.values-grid p \{.*?font-size:\s*)12px', r'\g<1>14px', css)

# Fix mobile .section-title p
css = re.sub(r'(\.home-page \.services-preview \.section-title p \{.*?font-size:\s*)11px', r'\g<1>14px', css)
css = re.sub(r'(\.about-page \.values-section \.section-title p \{\s*font-size:\s*)10px', r'\g<1>14px', css)
css = re.sub(r'(\.about-page \.built-section \.section-title p \{\s*font-size:\s*)10px', r'\g<1>14px', css)

# Fix mobile .values-grid p
css = re.sub(r'(\.about-page \.values-grid p \{.*?font-size:\s*)11px', r'\g<1>13px', css)

# Fix mobile .service-card li
css = re.sub(r'(\.services-dark-section \.service-card li \{.*?font-size:\s*)11px', r'\g<1>13px', css)
css = re.sub(r'(\.home-page \.service-card li \{.*?font-size:\s*)12px', r'\g<1>13px', css) # In case it was 12

# Fix .trust-row
css = re.sub(r'(\.home-page \.trust-row \{.*?font-size:\s*)10px', r'\g<1>13px', css)

with open('src/styles/global.css', 'w') as f:
    f.write(css)

print("Fonts fixed")
