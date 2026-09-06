with open('src/pages/Home.jsx', 'r') as f:
    content = f.read()

start_marker = "{/* =================================================\n          PRIVACY & POLICY\n          ================================================= */}"
end_marker = "</section>"

start_idx = content.find(start_marker)
if start_idx != -1:
    end_idx = content.find(end_marker, start_idx) + len(end_marker)
    content = content[:start_idx] + content[end_idx:]

with open('src/pages/Home.jsx', 'w') as f:
    f.write(content)
