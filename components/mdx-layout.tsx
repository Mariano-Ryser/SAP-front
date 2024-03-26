export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div style={{ color: 'white' }}>
            {children}
        </div>
  }
