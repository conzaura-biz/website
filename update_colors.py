import re

with open('src/styles/global.css', 'r') as f:
    css = f.read()

# 1. Update :root to include --gold
root_pattern = r"(:root\s*\{)(.*?)(})"
def update_root(match):
    content = match.group(2)
    # if --gold not there, add it
    if '--gold:' not in content:
        content = content.replace('--secondary: #C89004;', '--secondary: #C89004;\n  --gold: #F1BD15;')
    return match.group(1) + content + match.group(3)

css = re.sub(root_pattern, update_root, css, flags=re.DOTALL)

# 2. Replace hardcoded colors with variables
replacements = {
    r'#062b00': 'var(--green-dark)',
    r'#062b05': 'var(--green-dark)',
    r'#0D120F': 'var(--green-dark)',
    r'#c88e00': 'var(--secondary)',
    r'#c89004': 'var(--secondary)',
    r'#C89004': 'var(--secondary)',
    r'#071F02': 'var(--green)',
    r'#071f02': 'var(--green)',
    r'#0A2A04': 'var(--green-dark)'
}

for old, new in replacements.items():
    # Only replace if it's not already in :root (the regex above ensures we don't mess up variable definitions easily, but let's be careful)
    # Actually, it's safer to just replace them everywhere except in variable definitions.
    pass

# We will just replace them blindly, but fix up the root definitions if they get overwritten.
for old, new in replacements.items():
    css = re.sub(old + r'(?i)', new, css)

# Fix up the root definitions that might have been mangled
css = css.replace('--green: var(--green);', '--green: #071F02;')
css = css.replace('--green-dark: var(--green-dark);', '--green-dark: #0A2A04;')
css = css.replace('--secondary: var(--secondary);', '--secondary: #C89004;')

# 3. Change `em` highlights from var(--secondary) to var(--gold)
css = css.replace('h2 em { color: var(--secondary);', 'h2 em { color: var(--gold);')
css = css.replace('h1 em { color: var(--secondary);', 'h1 em { color: var(--gold);')
css = css.replace('em {color: var(--secondary);', 'em {color: var(--gold);')

# Also change the top strip and text-button spans
css = css.replace('.top-strip span { color: var(--secondary);', '.top-strip span { color: var(--gold);')
css = css.replace('.center-action .text-button span { color: var(--secondary);', '.center-action .text-button span { color: var(--gold);')

with open('src/styles/global.css', 'w') as f:
    f.write(css)

print("Colors updated in global.css")
