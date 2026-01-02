const DocumentGeneratingLoader = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
      <span className="inline-flex gap-1">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
      </span>
      <span>Generating document…</span>
    </div>
  );
};

export default DocumentGeneratingLoader;
