// Diagnostic-only stage checker. It does not execute an exploit.
function checkHen1352Stages(files){
  const required=[
    'payloads/hen.bin','payloads/SHA256.txt',
    'source/13.52_STATUS.txt','source/13.52_offsets_partial.txt',
    'source/external/Poops.java','source/external/Lapse.java',
    'source/external/Kernel.java','source/external/KernelOffset.java'
  ];
  const result=required.map((f,i)=>({stage:i+1,file:f,present:files.includes(f)}));
  result.push({stage:8,name:'kernel_hen_chain',status:'NOT_VERIFIED',reason:'No verified 13.52 full kernel chain is bundled'});
  return result;
}
