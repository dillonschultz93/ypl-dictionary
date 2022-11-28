```
.
└── platform
    ├── meta
    ├── outputFile // (v0.1.0)
    │   ├── language // (v0.1.0)
    │   └── fileNamePrefix  // (v0.1.0)            
    ├── ignore
    ├── allTransforms
    │   ├── valueKey
    │   ├── prefix
    │   ├── suffix
    │   ├── newSeparator
    │   ├── stemRemovalIndexes // (v0.1.0)
    │   ├── stemSwapIndexes
    │   ├── preREGEXes        
    │   ├── postREGEXes
    │   └── classesExtract // taxonomy modification
    ├── FIXME: address the KB requirement for a variant used as a paradigme for the page
    └── phyla  // aka classes      
        ├── phylum #1
        │   ├── outputFile
        │   ├── set // (v0.1.0)
        │   ├── overrides // (v0.1.0) prevents all what follows        
        │   ├── injectType // (v0.1.0)                
        │   ├── extraKeys
        │   ├── construct // taxonomy modification
        │   └── transform
        │       └── appendUnit
        │       └── REGEXes        
        │       └── ...
        ├── phylum #2        
        └── ...                
```
