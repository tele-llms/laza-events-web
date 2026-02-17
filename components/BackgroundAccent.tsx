'use client';

export default function BackgroundAccent() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Right Purple Blob */}
      <div 
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124, 90, 174, 0.15) 0%, rgba(124, 90, 174, 0.05) 40%, transparent 70%)',
        }}
      />
      
      {/* Bottom Left Purple Blob */}
      <div 
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124, 90, 174, 0.12) 0%, rgba(124, 90, 174, 0.04) 40%, transparent 70%)',
        }}
      />
      
      {/* Top Left Small Accent */}
      <div 
        className="absolute top-1/3 -left-16 w-[250px] h-[250px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(155, 125, 201, 0.1) 0%, transparent 70%)',
        }}
      />
      
      {/* Bottom Right Small Accent */}
      <div 
        className="absolute bottom-1/4 -right-16 w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(155, 125, 201, 0.1) 0%, transparent 70%)',
        }}
      />
      
      {/* Middle Right Accent */}
      <div 
        className="absolute top-1/2 -right-24 w-[400px] h-[400px] rounded-full -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(124, 90, 174, 0.08) 0%, transparent 60%)',
        }}
      />
      
      {/* Decorative Vertical Lines */}
      <div className="absolute top-0 left-[20%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-purple-300/20 to-transparent" />
      <div className="absolute bottom-0 right-[30%] w-[1px] h-[250px] bg-gradient-to-t from-transparent via-purple-300/20 to-transparent" />
      
      {/* Subtle horizontal accent */}
      <div className="absolute top-[40%] left-0 w-[200px] h-[1px] bg-gradient-to-r from-purple-400/20 to-transparent" />
    </div>
  );
}
