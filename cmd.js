const userint = document.getElementById('userint');
const commandInput = document.getElementById('commandInput');

function createOutput(text) {
    const div = document.createElement('div');
    userint.appendChild(div);

    let index = 0;
    const speed = 10; 

    function type() {
        if (index < text.length) {
            div.textContent += text.charAt(index);
            window.scrollTo(0, document.body.scrollHeight); 
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}


function executeCommand(command) {
    const div = document.createElement('div');
    div.textContent = 'C:/Users/Public> ' + command;
    div.style.color = 'yellow';
    userint.appendChild(div);
    userint.scrollTop = userint.scrollHeight;

    switch (command.trim().toLowerCase()) {
        case 'help':
            createOutput('Available commands:');
            createOutput('1. dir - Lists files and directories in the current directory.');
            createOutput('2. cd - Changes the current directory.');
            createOutput('3. md - Creates a new directory.');
            createOutput('4. rd - Removes a directory.');
            createOutput('5. copy - Copies one or more files to another location.');
            createOutput('6. del - Deletes one or more files.');
            createOutput('7. ren - Renames a file or directory.');
            createOutput('8. cls - Clears the command prompt screen.');
            createOutput('9. type - Displays the contents of a text file.');
            createOutput('10. echo - Displays messages or enables/disables command echoing.');
            createOutput('11. move - Moves one or more files from one location to another.');
            createOutput('12. tree - Displays a graphical representation of the folder structure.');
            createOutput('13. chkdsk - Checks a disk and displays a status report.');
            createOutput('14. format - Formats a disk.');
            createOutput('15. attrib - Displays or changes file attributes.');
            createOutput('16. comp - Compares the contents of two files or sets of files.');
            createOutput('17. find - Searches for a specific string in one or more files.');
            createOutput('18. sort - Sorts the contents of a file.');
            createOutput('19. doskey - recalls previously entered command-line commands, edits command lines, and creates macros.');
            createOutput('20. vol - Displays the disk volume label and serial number.');
            createOutput('21. assoc - Displays or modifies file name extension associations. ');
            createOutput('22. ping - ping is the primary TCP/IP command used to troubleshoot connectivity, reachability, and name resolution.');
            createOutput('23. path - Displays or sets a search path for executable files.');
            createOutput('24. netstat - to show a relatively simple list of all active TCP connections ');
            createOutput('25. time - Displays or sets the system time.');
            createOutput('26. date - Displays or sets the system date.');
            createOutput('27. net config - used to manage network resources');
            createOutput('28. ipconfig - displays all current TCP/IP network configuration values and refreshes Dynamic Host Configuration Protocol');
            createOutput('29. tasklist - displays the list of all running processes on your computer');
            createOutput('30. systeminfo - Copies system files to a disk.');
            break;
        case 'cls':
            const outputs = userint.querySelectorAll('div:not(#commandInput)');
            outputs.forEach(function(output) {
            output.remove();
    });
            break;
            // CLS ATTRIBUTE
            case 'cls /?':
                createOutput('Clears the screen.');
            break;
        case 'dir':
            createOutput(' 12/03/2024  01:38 pm    <DIR>          .');
            createOutput(' 12/03/2024  01:38 pm    <DIR>          ..');
            createOutput('12/03/2024  01:38 pm    <DIR>          new folder');
            createOutput(' 0 File(s)              0 bytes');
            createOutput('  3 Dir(s)  47,590,809,600 bytes free');
            break;
         //DIR ATTRIBUTE
            case 'dir /?':
                    createOutput('Displays a list of files and subdirectories in a directory.');
                    createOutput('');
                    createOutput('DIR [drive:][path][filename] [/A[[:]attributes]] [/B] [/C] [/D] [/L] [/N]');
                    createOutput('');
                    createOutput(' /A      Displays files with the specified attributes.');
                    createOutput('         attributes   D  Directories                R  Read-only files');
                    createOutput('                   H  Hidden files               A  Files ready for archiving');
                    createOutput('                   S  System files               -  Prefix meaning not');
                    createOutput('');
                    createOutput(' /B      Uses bare format (no heading information or summary).');
                    createOutput('');
                    createOutput(' /C      Display the thousand separator in file sizes.  This is the');
                    createOutput('         default.  Use /-C to disable display of separator.');
                    createOutput('');
                    createOutput(' /D     Same as wide but files are list sorted by column.');
                    createOutput('');
                    createOutput(' /L     Uses lowercase.');
                    createOutput('');
                    createOutput(' /N     New long list format where filenames are on the far right.');
                    createOutput('');
                    createOutput('Switches may be present in the DIRCMD environment variable.  Override');
                    createOutput('preset switches by prefixing any switch with - (hyphen)--for example, /-W.');
                    break;
     

        case 'cd':
            const cdOutput = document.createElement('div');
            cdOutput.classList.add('output-box');

            const imgCd = document.createElement('img');
            imgCd.src = 'images/cd.png';
            imgCd.alt = 'Change Directory Image';
            imgCd.style.width = '433px';

            const textCd = document.createElement('p');
            textCd.textContent = '2. cd - Changes the current directory. Type "cd" and the directory name that you want to be directed. THIS IS AN EXAMPLE ONLY.';
            textCd.style.color = '#fff';

            cdOutput.appendChild(imgCd);
            cdOutput.appendChild(textCd);

            userint.appendChild(cdOutput);
            userint.scrollTop = userint.scrollHeight;
            break;

            //CD ATTRIBUTES
        case 'cd /?':
                    createOutput('Displays the name of or changes the current directory.');
                    createOutput('');
                    createOutput('CD [/D] [drive:][path]');
                    createOutput('');
                    createOutput('  ..   Specifies that you want to change to the parent directory.');
                    createOutput('  .    Specifies that you want to change to the current directory.');
                    createOutput('');
                    createOutput('  /D   Changes the current drive as well as the directory.');
                    createOutput('');
                    createOutput('Use CD with just a drive letter to change to the drive of that letter.');
            break;

        case 'md':
            const mdOutput = document.createElement('div');
            mdOutput.classList.add('output-box');

            const imgMd = document.createElement('img');
            imgMd.src = 'images/md.png';
            imgMd.alt = 'Make Directory Image';
            imgMd.style.width = '432px';

            const textMd = document.createElement('p');
            textMd.textContent = '3. md - Creates a new directory. Type "md" along with the desired name file. And as you can see, it creates a new directory. THIS IS AN EXAMPLE ONLY.';
            textMd.style.color = '#fff';

            mdOutput.appendChild(imgMd);
            mdOutput.appendChild(textMd);

            userint.appendChild(mdOutput);
            userint.scrollTop = userint.scrollHeight;
            break;
        default:
            createOutput('Command not found: ' + command);
            break;

            case 'md /?':
                createOutput('Creates a directory.');
                createOutput('');
                createOutput('MKDIR [drive:]path');
                createOutput('MD [drive:]path');
                createOutput('');
                createOutput('If Command Extensions are enabled MKDIR changes as follows:');
                createOutput('');
                createOutput('MKDIR creates any intermediate directories in the path, if needed.');
                createOutput('For example, assume \\a does not exist then:');
                createOutput('');
                createOutput('    mkdir \\a\\b\\c\\d');
                createOutput('');
                createOutput('is the same as:');
                createOutput('');
                createOutput('    mkdir \\a');
                createOutput('    chdir \\a');
                createOutput('    mkdir b');
                createOutput('    chdir b');
                createOutput('    mkdir c');
                createOutput('    chdir c');
                createOutput('    mkdir d');
                createOutput('');
                createOutput('which is what you would have to type if extensions were disabled.');
                break;
            

            //dir /a
            case 'dir /a':
                createOutput('12/03/2024  01:38 pm    <DIR>          .');
                createOutput('12/03/2024  01:38 pm    <DIR>          ..');
                createOutput('12/03/2024  01:38 pm    <DIR>          new folder');
                createOutput('12/03/2024  01:38 pm                   0 file.txt');
                createOutput('12/03/2024  01:38 pm                   0 file2.txt');
                createOutput('12/03/2024  01:38 pm                   0 file3.txt');
                createOutput('12/03/2024  01:38 pm                   0 file4.txt');
                createOutput('              0 File(s)              0 bytes');
                createOutput('              3 Dir(s)  47,590,809,600 bytes free');
                break;
        //dir /b
            case 'dir /b':
                createOutput('file.txt');
                createOutput('file2.txt');
                createOutput('file3.txt');
                createOutput('file4.txt');
                createOutput('file5.txt');
                createOutput('Similar to "dir /c", each line represents a filename found in the current directory. There is no extra information such as file size, modification date, or attributes.');
                break;
            //dir /c    
                case 'dir /c':
                    
                    createOutput('File.txt');
                    createOutput('File2.txt');
                    createOutput('File3.txt');
                    createOutput('File4.txt');
                    createOutput('File5.txt');
                    createOutput('Each line represents a filename found in the current directory. There is no extra information such as file size, modification date, or attributes. It simply lists the filenames.');
                    break;

                    case 'rd /?':
                    createOutput('Removes (deletes) a directory.');
                    createOutput('');
                    createOutput('RMDIR [/S] [/Q] [drive:]path');
                    createOutput('RD [/S] [/Q] [drive:]path');
                    createOutput('');
                    createOutput('    /S      Removes all directories and files in the specified directory');
                    createOutput('            in addition to the directory itself.  Used to remove a directory');
                    createOutput('            tree.');
                    createOutput('');
                    createOutput('    /Q      Quiet mode, do not ask if ok to remove a directory tree with /S');
                    break;

                    case 'copy /?':
                        createOutput('Copies one or more files to another location.');
                        createOutput('');
                        createOutput('COPY [/D] [/V] [/N] [/Y | /-Y] [/Z] [/L] [/A | /B ] source [/A | /B]');
                        createOutput('     [+ source [/A | /B] [+ ...]] [destination [/A | /B]]');
                        createOutput('');
                        createOutput('  source       Specifies the file or files to be copied.');
                        createOutput('  /A           Indicates an ASCII text file.');
                        createOutput('  /B           Indicates a binary file.');
                        createOutput('  /D           Allow the destination file to be created decrypted');
                        createOutput('  destination  Specifies the directory and/or filename for the new file(s).');
                        createOutput('  /V           Verifies that new files are written correctly.');
                        createOutput('  /N           Uses short filename, if available, when copying a file with a');
                        createOutput('               non-8dot3 name.');
                        createOutput('  /Y           Suppresses prompting to confirm you want to overwrite an');
                        createOutput('               existing destination file.');
                        createOutput('  /-Y          Causes prompting to confirm you want to overwrite an');
                        createOutput('               existing destination file.');
                        createOutput('  /Z           Copies networked files in restartable mode.');
                        createOutput('  /L           If the source is a symbolic link, copy the link to the target');
                        createOutput('               instead of the actual file the source link points to.');
                        createOutput('');
                        createOutput('The switch /Y may be preset in the COPYCMD environment variable.');
                        createOutput('This may be overridden with /-Y on the command line.  Default is');
                        createOutput('to prompt on overwrites unless COPY command is being executed from');
                        createOutput('within a batch script.');
                        createOutput('');
                        createOutput('To append files, specify a single file for destination, but multiple files');
                        createOutput('for source (using wildcards or file1+file2+file3 format).');
                        break;
                    

                        case 'rd':
                            const rdOutput = document.createElement('div');
                            rdOutput.classList.add('output-box');
                        
                            const imgRd = document.createElement('img');
                            imgRd.src = 'images/rd2.png';
                            imgRd.alt = 'Remove Directory Image';
                            imgRd.style.width = '432px'; 
                        
                            rdOutput.appendChild(imgRd);
                            userint.appendChild(rdOutput);
                            userint.scrollTop = userint.scrollHeight;
                        
                            createOutput('is used to remove (delete) directories (folders). It is similar to the rmdir command.');
                            break;

                        case 'rd /s':
                                createOutput('it suppresses the prompts asking for confirmation before removing directories.');
                                createOutput('The syntax for using rd /q is rd /q [drive:]path.');
                                break;
                               
                         case 'rd /q':
                                createOutput('Removes directories quietly without asking for confirmation.');
                                createOutput('');
                                createOutput('In silent mode (/q), there will be no visual output on the screen');
                                createOutput('if the deletion is successful. This means you won\'t see any');
                                createOutput('confirmation messages or error messages.');
                                break;
                                
                        
                        case 'tree':
                               const treeOutput = document.createElement('div');
                               treeOutput.classList.add('output-box');
                                
                               const imgTree = document.createElement('img');
                               imgTree.src = 'images/tree.png'; // Path to your image
                               imgTree.alt = 'Tree Command Image';
                               imgTree.style.width = '432px'; // Adjust the width as needed
                                
                               treeOutput.appendChild(imgTree);
                               userint.appendChild(treeOutput);
                               userint.scrollTop = userint.scrollHeight;
                                
                               createOutput('Displays a graphical representation of the folder structure.');
                               createOutput('');
                               createOutput('The tree command recursively displays the contents of a directory');
                               createOutput('in a tree-like format, showing subdirectories and files. Above is an example of it.');
                                 break;
                                
                                 case 'tree /?':
                                    createOutput('Graphically displays the folder structure of a drive or path.');
                                    createOutput('');
                                    createOutput('TREE [drive:][path] [/F] [/A]');
                                    createOutput('');
                                    createOutput('   /F   Display the names of the files in each folder.');
                                    createOutput('   /A   Use ASCII instead of extended characters.');
                                    break;
                                
                                    case 'tree /f':
                                        createOutput('THIS IS AN EXAMPLE ONLY');
                                        createOutput('Folder PATH listing');
                                        createOutput('Volume serial number is 9806-17B3');
                                        createOutput('C:.');
                                        createOutput('│   website.zip');
                                        createOutput('│');
                                        createOutput('├───New folder');
                                        createOutput('│   │   cmd.css');
                                        createOutput('│   │   cmd.html');
                                        createOutput('│   │   cmd.js');
                                        createOutput('│   │   home.css');
                                        createOutput('│   │   home.html');
                                        createOutput('│   │   script.js');
                                        createOutput('│   │   style.css');
                                        createOutput('│   │');
                                        createOutput('│   └───images');
                                        createOutput('│           cd.png');
                                        createOutput('│           cmd.png');
                                        createOutput('│           dir.jpeg');
                                        createOutput('│           header.png');
                                        createOutput('│           htmlcmd.png');
                                        createOutput('│           layers.png');
                                        createOutput('│           md.png');
                                        createOutput('│           rd2.png');
                                        createOutput('│           tree.png');
                                        createOutput('│           window.png');
                                        createOutput('│');
                                        createOutput('└───users');
                                        break;
                                           
                                        
                                        case 'tree /a':
                                            createOutput('Folder PATH listing');
                                            createOutput('Volume serial number is 9806-17B3');
                                            createOutput('C:.');
                                            createOutput('+---New folder');
                                            createOutput('|   \\---images');
                                            createOutput('\\---users');
                                            break;


                                       case 'copy':
                                                const copyOutput = document.createElement('div');
                                                copyOutput.classList.add('output-box');
                                            
                                                const imgCopy = document.createElement('img');
                                                imgCopy.src = 'images/copy.png';
                                                imgCopy.alt = 'Copy Command Image';
                                                imgCopy.style.width = '432px'; 
                                            
                                                copyOutput.appendChild(imgCopy);
                                                userint.appendChild(copyOutput);
                                                userint.scrollTop = userint.scrollHeight;
                                            
                                                createOutput('Copies one or more files to another location.');    
                                         break;       
                                                
                            case 'copy /b':
                            createOutput("copy /b <file1> + <file2> <output>");
                            createOutput("This command will concatenate file1.bin and file2.bin and save the output to output.bin.");
                            break;            

                            case 'copy /d':
                            createOutput('Specifies that the destination file should be created decrypted.');
                            break;

                            case 'copy /v':
                                createOutput('Verifies that new files are written correctly.');
                                break;
                            case 'copy /n':
                            createOutput('copy /n longfilename.txt destination.txt');    
                            createOutput('Uses the short filename, if available, when copying a file with a non-8dot3 name.');
                            break;
                           
                                case 'del /?':
                                    createOutput('Deletes one or more files or directories.');
                                    createOutput('');
                                    createOutput('DEL [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names');
                                    createOutput('ERASE [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names');
                                    createOutput('');
                                    createOutput('  names         Specifies a list of one or more files or directories.');
                                    createOutput('                Wildcards may be used to delete multiple files. If a');
                                    createOutput('                directory is specified, all files within the directory');
                                    createOutput('                will be deleted.');
                                    createOutput('');
                                    createOutput('  /P            Prompts for confirmation before deleting each file.');
                                    createOutput('  /F            Force deleting of read-only files.');
                                    createOutput('  /S            Delete specified files from all subdirectories.');
                                    createOutput('  /Q            Quiet mode, do not ask if ok to delete on global wildcard');
                                    createOutput('  /A            Selects files to delete based on attributes');
                                    createOutput('  attributes    R  Read-only files            S  System files');
                                    createOutput('                H  Hidden files               A  Files ready for archiving');
                                    createOutput('                I  Not content indexed Files  L  Reparse Points');
                                    createOutput('                O  Offline files              -  Prefix meaning not');
                                    createOutput('');
                                    createOutput('If Command Extensions are enabled DEL and ERASE change as follows:');
                                    createOutput('');
                                    createOutput('The display semantics of the /S switch are reversed in that it shows');
                                    createOutput('you only the files that are deleted, not the ones it could not find.');
                                    break;
                                
                                    case 'del /p':
                                    createOutput('Usage: del /p <filename>');   
                                    createOutput('Are you sure you want to delete examplefile.txt? (Y/N)');
                                    createOutput('ABOVE IS AN EXAMPLE ONLY');
                                    break;
                                    
                                    case 'ren /?':
                                        createOutput('Renames a file or files.');
                                        createOutput('');
                                        createOutput('RENAME [drive:][path]filename1 filename2.');
                                        createOutput('REN [drive:][path]filename1 filename2.');
                                        createOutput('');
                                        createOutput('Note that you cannot specify a new drive or path for your destination file.');
                                        break;
                                        
                                        
                                        case 'ren':
                                            createOutput('Usage: ren <oldfilename> <newfilename>');
                                            createOutput('If you type "ren oldfilename.txt newfilename.txt", it will rename the oldfilename.txt to newfilename.txt.');
                                            break;                  
                   
                                            case 'type /?':
                                                createOutput('Displays the contents of a text file or files.');
                                                createOutput('');
                                                createOutput('TYPE [drive:][path]filename');
                                            break;


                                            case 'echo /?':
                                                createOutput('Displays messages or enables/disables command echoing.');
                                                createOutput('');
                                                createOutput('ECHO [ON | OFF]');
                                                createOutput('ECHO [message]');
                                                createOutput('');
                                                createOutput('  ON    Enables command echoing.');
                                                createOutput('  OFF   Disables command echoing.');
                                                createOutput('');
                                                createOutput('Type ECHO without parameters to display the current echo setting.');
                                                break;

                                            case 'move /?':
                                            createOutput('Moves one or more files from one location to another.');
                                            createOutput('');
                                            createOutput('MOVE [/Y | /-Y] [drive:][path]filename1[,...] destination');
                                            createOutput('');
                                            createOutput('  /Y           Suppresses prompting to confirm you want to overwrite');
                                            createOutput('               an existing destination file.');
                                            createOutput('  /-Y          Causes prompting to confirm you want to overwrite');
                                            createOutput('               an existing destination file.');
                                            createOutput('');
                                            createOutput('The switch /Y may be present in the COPYCMD environment variable.');
                                            createOutput('This may be overridden with /-Y on the command line. Default');
                                            createOutput('is to prompt on overwrites unless MOVE command is being executed');
                                            createOutput('from within a batch script.');
                                            break;

                                            case 'chkdsk':
                                                const chkdskOutput = document.createElement('div');
                                                chkdskOutput.classList.add('output-box');
                                    
                                                const imgchkdsk = document.createElement('img');
                                                imgchkdsk.src = 'images/chkdsk.png';
                                                imgchkdsk.alt = 'Checking Disk Image';
                                                imgchkdsk.style.width = '433px';
                                    
                                                const textchkdsk = document.createElement('p');
                                                textchkdsk.textContent = 'When you ran chkdsk on its own, it scans the drives in read-only mode. THIS IS AN EXAMPLE ONLY.';
                                                textchkdsk.style.color = '#fff';
                                    
                                                chkdskOutput.appendChild(imgchkdsk);
                                                chkdskOutput.appendChild(textchkdsk);
                                    
                                                userint.appendChild(chkdskOutput);
                                                userint.scrollTop = userint.scrollHeight;
                                                break;    
                                         
                                            case 'chkdsk /f':
                                                createOutput('THIS IS AN EXAMPLE OUTPUT ONLY');
                                                createOutput('The type of the file system is NTFS.');
                                                createOutput('The volume is in use by another process. Chkdsk might report errors when no corruption is present.');
                                                createOutput('Volume label is System.');
                                                createOutput('');
                                                createOutput('WARNING! /F parameter not specified.');
                                                createOutput('Running CHKDSK in read-only mode.');
                                                createOutput('');
                                                createOutput('Stage 1: Examining basic file system structure ...');
                                                createOutput('Stage 2: Examining file name linkage ...');
                                                createOutput('Stage 3: Examining security descriptors ...');
                                                createOutput('');
                                                createOutput('Windows has found problems and will attempt to repair them.');
                                                createOutput('No further action is required.');
                                                createOutput('');
                                                createOutput('976760831 KB total disk space.');
                                                createOutput('123456789 KB in 123456 files.');
                                                createOutput('123456 KB in 12345 indexes.');
                                                createOutput('0 KB in bad sectors.');
                                                createOutput('1234567 KB in use by the system.');
                                                createOutput('123456 KB occupied by the log file.');
                                                createOutput('123456789 KB available on disk.');
                                                createOutput('');
                                                createOutput('4096 bytes in each allocation unit.');
                                                createOutput('244140207 total allocation units on disk.');
                                                createOutput('30884234 allocation units available on disk.');
                                                break;
                                            

                                                case 'chkdsk /r':
                                                    createOutput('THIS IS AN EXAMPLE OUTPUT ONLY');
                                                    createOutput('The type of the file system is NTFS.');
                                                    createOutput('Volume label is Data.');
                                                    createOutput('');
                                                    createOutput('Stage 1: Examining basic file system structure ...');
                                                    createOutput('  123456 file records processed.');
                                                    createOutput('File verification completed.');
                                                    createOutput('  123 large file records processed.');
                                                    createOutput('  0 bad file records processed.');
                                                    createOutput('');
                                                    createOutput('Stage 2: Examining file name linkage ...');
                                                    createOutput('  123456 index entries processed.');
                                                    createOutput('Index verification completed.');
                                                    createOutput('  0 unindexed files scanned.');
                                                    createOutput('  0 unindexed files recovered to lost and found.');
                                                    createOutput('');
                                                    createOutput('Stage 3: Examining security descriptors ...');
                                                    createOutput('Security descriptor verification completed.');
                                                    createOutput('  12345 data files processed.');
                                                    createOutput('CHKDSK is verifying Usn Journal...');
                                                    createOutput('  12345678 USN bytes processed.');
                                                    createOutput('Usn Journal verification completed.');
                                                    createOutput('CHKDSK discovered free space marked as allocated in the master file table (MFT) bitmap.');
                                                    createOutput('Correcting errors in the Volume Bitmap.');
                                                    createOutput('Windows has made corrections to the file system.');
                                                    createOutput('');
                                                    createOutput('No further action is required.');
                                                    createOutput('');
                                                    createOutput('97654848 KB total disk space.');
                                                    createOutput('  56789012 KB in 345678 files.');
                                                    createOutput('    123456 KB in 78901 indexes.');
                                                    createOutput('         0 KB in bad sectors.');
                                                    createOutput('    123456 KB in use by the system.');
                                                    createOutput('     12345 KB occupied by the log file.');
                                                    createOutput('  40789098 KB available on disk.');
                                                    createOutput('');
                                                    createOutput('      4096 bytes in each allocation unit.');
                                                    createOutput('  12480000 total allocation units on disk.');
                                                    createOutput('   7566666 allocation units available on disk.');
                                                    break;
                                                
                                                    case 'chkdsk /v':
                                                        createOutput('The type of the file system is NTFS.');
                                                        createOutput('Volume label is Data.');
                                                        createOutput('');
                                                        createOutput('Checking file system on C:');
                                                        createOutput('Volume label is Data.');
                                                        createOutput('');
                                                        createOutput('Stage 1: Examining basic file system structure ...');
                                                        createOutput('  123456 file records processed.');
                                                        createOutput('File verification completed.');
                                                        createOutput('  123 large file records processed.');
                                                        createOutput('  0 bad file records processed.');
                                                        createOutput('');
                                                        createOutput('Stage 2: Examining file name linkage ...');
                                                        createOutput('  123456 index entries processed.');
                                                        createOutput('Index verification completed.');
                                                        createOutput('  0 unindexed files scanned.');
                                                        createOutput('  0 unindexed files recovered to lost and found.');
                                                        createOutput('');
                                                        createOutput('Stage 3: Examining security descriptors ...');
                                                        createOutput('Security descriptor verification completed.');
                                                        createOutput('  12345 data files processed.');
                                                        createOutput('CHKDSK is verifying Usn Journal...');
                                                        createOutput('  12345678 USN bytes processed.');
                                                        createOutput('Usn Journal verification completed.');
                                                        createOutput('CHKDSK discovered free space marked as allocated in the master file table (MFT) bitmap.');
                                                        createOutput('Correcting errors in the Volume Bitmap.');
                                                        createOutput('Windows has made corrections to the file system.');
                                                        createOutput('');
                                                        createOutput('No further action is required.');
                                                        break;
                                                    
                                                        case 'chkdsk /?':
                                                            createOutput('Checks a disk and displays a status report.');
                                                            createOutput('');
                                                            createOutput('CHKDSK [volume[[path]filename]]] [/F] [/V] [/R] [/X] [/I] [/C] [/L[:size]] [/B] [/scan] [/spotfix]');
                                                            createOutput('');
                                                            createOutput('  volume              Specifies the drive letter (followed by a colon),');
                                                            createOutput('                      mount point, or volume name.');
                                                            createOutput('  filename            FAT/FAT32 only: Specifies the files to check for');
                                                            createOutput('                      fragmentation.');
                                                            createOutput('  /F                  Fixes errors on the disk.');
                                                            createOutput('  /V                  On FAT/FAT32: Displays the full path and name of every');
                                                            createOutput('                      file on the disk.');
                                                            createOutput('                      On NTFS: Displays cleanup messages if any.');
                                                            createOutput('  /R                  Locates bad sectors and recovers readable information');
                                                            createOutput('                      (implies /F, when /scan not specified).');
                                                            createOutput('  /L:size             NTFS only: Changes the log file size to the specified');
                                                            createOutput('                      number of kilobytes. If size is not specified, displays');
                                                            createOutput('                      current size.');
                                                            createOutput('  /X                  Forces the volume to dismount first if necessary.');
                                                            createOutput('                      All opened handles to the volume would then be invalid');
                                                            createOutput('                      (implies /F).');
                                                            createOutput('  /I                  NTFS only: Performs a less vigorous check of index');
                                                            createOutput('                      entries.');
                                                            createOutput('  /C                  NTFS only: Skips checking of cycles within the folder');
                                                            createOutput('                      structure.');
                                                            createOutput('  /B                  NTFS only: Re-evaluates bad clusters on the volume');
                                                            createOutput('                      (implies /R)');
                                                            createOutput('  /scan               NTFS only: Runs an online scan on the volume');
                                                            createOutput('  /forceofflinefix    NTFS only: (Must be used with "/scan")');
                                                            createOutput('                      Bypass all online repair; all defects found');
                                                            createOutput('                      are queued for offline repair (i.e. "chkdsk /spotfix").');
                                                            createOutput('  /perf               NTFS only: (Must be used with "/scan")');
                                                            createOutput('                      Uses more system resources to complete a scan as fast as');
                                                            createOutput('                      possible. This may have a negative performance impact on');
                                                            createOutput('                      other tasks running on the system.');
                                                            createOutput('  /spotfix            NTFS only: Runs spot fixing on the volume');
                                                            createOutput('  /sdcleanup          NTFS only: Garbage collect unneeded security descriptor');
                                                            createOutput('                      data (implies /F).');
                                                            createOutput('  /offlinescanandfix  Runs an offline scan and fix on the volume.');
                                                            createOutput('  /freeorphanedchains FAT/FAT32/exFAT only: Frees any orphaned cluster chains');
                                                            createOutput('                      instead of recovering their contents.');
                                                            createOutput('  /markclean          FAT/FAT32/exFAT only: Marks the volume clean if no');
                                                            createOutput('                      corruption was detected, even if /F was not specified.');
                                                            createOutput('');
                                                            createOutput('The /I or /C switch reduces the amount of time required to run Chkdsk by');
                                                            createOutput('skipping certain checks of the volume.');
                                                            break;

                                                            case 'format /?':
                                                                createOutput('Formats a disk for use with Windows.');
                                                                createOutput('');
                                                                createOutput('FORMAT volume [/FS:file-system] [/V:label] [/Q] [/L[:enablecompression]] [/A:size] [/C] [/X] [/P:passes] [/S:state] [/D] [/U:allocation_unit_size] [/R:revision] [/I:enablecompression] [/K] [/E] [/N:number_of_files] [/1] [/4] [/32]');
                                                                createOutput('');
                                                                createOutput('  volume              Specifies the drive letter (followed by a colon),');
                                                                createOutput('                      mount point, or volume name.');
                                                                createOutput('  /FS:file-system     Specifies the type of file system (FAT, FAT32, exFAT,');
                                                                createOutput('                      NTFS, UDF, ReFS).');
                                                                createOutput('  /V:label            Specifies the volume label.');
                                                                createOutput('  /Q                  Performs a quick format. Note that this switch overrides');
                                                                createOutput('                      the /P parameter, if specified.');
                                                                createOutput('  /L[:enablecompression]  Enable NTFS compression. If no value is specified,');
                                                                createOutput('                      enable compression. If the value "enablecompression" is');
                                                                createOutput('                      specified, compression is enabled. If the value');
                                                                createOutput('                      "disablecompression" is specified, compression is');
                                                                createOutput('                      disabled.');
                                                                createOutput('  /A:size             Overrides the default allocation unit size. Default settings');
                                                                createOutput('                      are strongly recommended for general use.');
                                                                createOutput('                      ReFS supports sizes larger than 4 KB for allocation unit size.');
                                                                createOutput('                      The specified size must be evenly divisible by 512.');
                                                                createOutput('                      If this option is omitted, default allocation unit sizes are');
                                                                createOutput('                      determined based on volume size. ');
                                                                createOutput('                      For small volumes (less than 64 MB), the default allocation unit');
                                                                createOutput('                      size is 512 bytes.');
                                                                createOutput('                      For volumes less than 512 MB, the default allocation unit size');
                                                                createOutput('                      is 512 bytes.');
                                                                createOutput('                      For volumes at least 512 MB, the default allocation unit size');
                                                                createOutput('                      is 4 KB.');
                                                                createOutput('                      For ReFS, the minimum supported allocation unit size is 64 KB.');
                                                                createOutput('  /C                  NTFS only: Files created on the new volume will be compressed');
                                                                createOutput('                      by default.');
                                                                createOutput('  /X                  Forces the volume to dismount first if necessary. All opened');
                                                                createOutput('                      handles to the volume would then be invalid.');
                                                                createOutput('  /P:passes           Zero every sector on the volume passes times. Passes is a');
                                                                createOutput('                      number from 1 to 9.');
                                                                createOutput('  /S:state            Specifies the state of the boot sector on the volume');
                                                                createOutput('                      (Windows only).');
                                                                createOutput('  /D                  FAT/FAT32 only: Use DMA transfers to format the drive.');
                                                                createOutput('                      This may reduce the time required to format the volume.');
                                                                createOutput('  /U:allocation_unit_size');
                                                                createOutput('                      Overrides the default allocation unit size. Default settings');
                                                                createOutput('                      are strongly recommended for general use.');
                                                                createOutput('  /R:revision         Updates the NTFS filesystem on the volume to the specified');
                                                                createOutput('                      version. Default is the current version.');
                                                                createOutput('  /I:enablecompression');
                                                                createOutput('                      Enable NTFS compression. Equivalent to /L:enablecompression.');
                                                                createOutput('  /K                  Skips disk checks, such as checking for bad sectors.');
                                                                createOutput('  /E                  Creates an NTFS volume with large up to 16TB clusters.');
                                                                createOutput('  /N:number_of_files  Specifies the maximum number of files that can be stored in');
                                                                createOutput('                      the root directory.');
                                                                createOutput('  /1                  Creates a single track on the disk.');
                                                                createOutput('  /4                  Creates a single track per side on the disk.');
                                                                createOutput('  /32                 Uses the full 32 sectors per track for a single track.');
                                                                break;

                                                                case 'format':
                                                                    const formatExampleOutput = document.createElement('div');
                                                                    formatExampleOutput.classList.add('output-box');
                                                                
                                                                    const formatImg = document.createElement('img');
                                                                    formatImg.src = 'images/format.png';
                                                                    formatImg.alt = 'Format Command Image';
                                                                    formatImg.style.width = '432px';
                                                                
                                                                    const formatText = document.createElement('p');
                                                                    formatText.textContent = 'Example output of using the format command.';
                                                                    formatText.style.color = '#fff';
                                                                
                                                                    formatExampleOutput.appendChild(formatImg);
                                                                    formatExampleOutput.appendChild(formatText);
                                                                
                                                                    userint.appendChild(formatExampleOutput);
                                                                    userint.scrollTop = userint.scrollHeight;
                                                                    break;        
                                                                    
                                                                    case 'echo':
                                                                        const echoExampleOutput = document.createElement('div');
                                                                        echoExampleOutput.classList.add('output-box');
                                                                    
                                                                        const echoImg = document.createElement('img');
                                                                        echoImg.src = 'images/echo.png';
                                                                        echoImg.alt = 'Echo Command Image';
                                                                        echoImg.style.width = '432px';
                                                                    
                                                                        const echoText = document.createElement('p');
                                                                        echoText.textContent = 'Example output of using the echo command.';
                                                                        echoText.style.color = '#fff';
                                                                    
                                                                        echoExampleOutput.appendChild(echoImg);
                                                                        echoExampleOutput.appendChild(echoText);
                                                                    
                                                                        userint.appendChild(echoExampleOutput);
                                                                        userint.scrollTop = userint.scrollHeight;
                                                                        break;                                  

                                                                        case 'attrib':
                                                                        
                                                                            const attribExampleOutput = document.createElement('div');
                                                                            attribExampleOutput.classList.add('output-box');
                                                                            
                                                                            
                                                                            const attribImg = document.createElement('img');
                                                                            attribImg.src = 'images/attrib.png';
                                                                            attribImg.alt = 'Attrib Command Image';
                                                                            attribImg.style.width = '432px';
                                                                             
                                                                            const attribText = document.createElement('p');
                                                                            attribText.textContent = 'Displays or changes file attributes.';
                                                                            attribText.style.color = '#fff';   
                                                                         
                                                                            attribExampleOutput.appendChild(attribImg);
                                                                            attribExampleOutput.appendChild(attribText);
                                                                            
                                                                            userint.appendChild(attribExampleOutput);
                                                                            userint.scrollTop = userint.scrollHeight;
                                                                            break;
                                                                        
                                                                            case 'attrib /?':
                                                                                createOutput('Displays or changes file attributes.');
                                                                                createOutput('');
                                                                                createOutput('ATTRIB [+R | -R] [+A | -A] [+S | -S] [+H | -H] [drive:][path][filename]');
                                                                            break;    
                                                                        
                                                                            case 'date':
                                                                        
                                                                                const currentDate = new Date();
                                                                            
                                                                                
                                                                                const day = currentDate.getDate();
                                                                                const month = currentDate.getMonth() + 1; 
                                                                                const year = currentDate.getFullYear();
                                                                            
                                                                               
                                                                                const formattedDate = `${day}/${month}/${year}`;
                                                                            
                                                                                    createOutput(`Current date: ${formattedDate}`);
                                                                                break;
                                           
                                                                                case 'date /?':
                                                                                    createOutput('Displays or sets the date.');
                                                                                    createOutput('');
                                                                                    createOutput('DATE [/T | date]');
                                                                                    createOutput('');
                                                                                    createOutput('Type DATE without parameters to display the current date setting and');
                                                                                    createOutput('a prompt for a new one. Press ENTER to keep the same date.');
                                                                                    createOutput('');
                                                                                    createOutput('If Command Extensions are enabled the DATE command supports');
                                                                                    createOutput('the /T switch which tells the command to just output the');
                                                                                    createOutput('current date, without prompting for a new date.');
                                                                                    break;
                                                                                 
                                                                                    case 'time':
                                                                                        const currentTime = new Date().toLocaleTimeString();
                                                                                        createOutput('The current time is: ' + currentTime);
                                                                                        break;
                                                                                          
                                                                                        
                                                                                        case 'time /?':
                                                                                            createOutput('Displays or sets the system time.');
                                                                                            createOutput('');
                                                                                            createOutput('TIME [/T | time]');
                                                                                            createOutput('');
                                                                                            createOutput('Type TIME without parameters to display the current time setting and');
                                                                                            createOutput('a prompt for a new one. Press ENTER to keep the same time.');
                                                                                            createOutput('');
                                                                                            createOutput('If Command Extensions are enabled the TIME command supports');
                                                                                            createOutput('the /T switch which tells the command to just output the');
                                                                                            createOutput('current time, without prompting for a new time.');
                                                                                            break;
                                                                                        
                                                                                            case 'ping /?':
                                                                                                createOutput('Usage: ping [-t] [-a] [-n count] [-l size] [-f] [-i TTL] [-v TOS]');
createOutput('[-r count] [-s count] [[-j host-list] | [-k host-list]]');
createOutput('            [-w timeout] [-R] [-S srcaddr] [-c compartment] [-p]');
createOutput('            [-4] [-6] target_name');
createOutput('');
createOutput('Options:');
createOutput('    -t             Ping the specified host until stopped.');
createOutput('                   To see statistics and continue - type Control-Break;');
createOutput('                   To stop - type Control-C.');
createOutput('    -a             Resolve addresses to hostnames.');
createOutput('    -n count       Number of echo requests to send.');
createOutput('    -l size        Send buffer size.');
createOutput('    -f             Set Don\'t Fragment flag in packet (IPv4-only).');
createOutput('    -i TTL         Time To Live.');
createOutput('    -v TOS         Type Of Service (IPv4-only. This setting has been deprecated');
createOutput('                   and has no effect on the type of service field in the IP');
createOutput('                   Header).');
createOutput('    -r count       Record route for count hops (IPv4-only).');
createOutput('    -s count       Timestamp for count hops (IPv4-only).');
createOutput('    -j host-list   Loose source route along host-list (IPv4-only).');
createOutput('    -k host-list   Strict source route along host-list (IPv4-only).');
createOutput('    -w timeout     Timeout in milliseconds to wait for each reply.');
createOutput('    -R             Use routing header to test reverse route also (IPv6-only).');
createOutput('                   Per RFC 5095 the use of this routing header has been');
createOutput('                   deprecated. Some systems may drop echo requests if');
createOutput('                   this header is used.');
createOutput('    -S srcaddr     Source address to use.');
createOutput('    -c compartment Routing compartment identifier.');
createOutput('    -p             Ping a Hyper-V Network Virtualization provider address.');
createOutput('    -4             Force using IPv4.');
createOutput('    -6             Force using IPv6.');


                                                                                                break;

                                                                                                case 'ping':
                                                                                                createOutput('Pinging server...');
                                                                                                setTimeout(function() {
                                                                                                    createOutput('Reply from server: Destination host reachable.');
                                                                                                    createOutput('Ping statistics for server:');
                                                                                                    createOutput('Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),');
                                                                                                    createOutput('Approximate round trip times in milliseconds:');
                                                                                                    createOutput('Minimum = 10ms, Maximum = 50ms, Average = 20ms');
                                                                                                    createOutput('Each ping test makes four attempts and gives a response for each. If the response looks like this, the test was successful.');
                                                                                                }, 2000); 
                                                                                                break;
                                                                                            
                                                                                                case 'systeminfo':
                                                                                                    createOutput('Host Name:                 DESKTOP-GLHRCTT');
                                                                                                    createOutput('OS Name:                   Microsoft Windows 10 Pro');
                                                                                                    createOutput('OS Version:                10.0.19045 N/A Build 19045');
                                                                                                    createOutput('OS Manufacturer:           Microsoft Corporation');
                                                                                                    createOutput('OS Configuration:          Standalone Workstation');
                                                                                                    createOutput('OS Build Type:             Multiprocessor Free');
                                                                                                    createOutput('Registered Owner:          Huffle');
                                                                                                    createOutput('Registered Organization:');
                                                                                                    createOutput('Product ID:                00330-80000-00000-AA610');
                                                                                                    createOutput('Original Install Date:     06/07/2023, 9:18:45 am');
                                                                createOutput('System Boot Time:          14/03/2024, 8:31:14 am');
                                                                createOutput('System Manufacturer:       Hewlett-Packard');
                                                                createOutput('System Model:              HP Elite 7100 Microtower PC');
                                                                createOutput('System Type:               x64-based PC');
                                                                createOutput('Processor(s):              1 Processor(s) Installed.');
                                                                createOutput('                           [01]: Intel64 Family 6 Model 37 Stepping 2 GenuineIntel ~2933 Mhz');
                                                                createOutput('BIOS Version:              American Megatrends Inc. 5.14, 23/03/2010');
                                                                createOutput('Windows Directory:         C:\\Windows');
                                                                createOutput('System Directory:          C:\\Windows\\system32');
                                                                createOutput('Boot Device:               \\Device\\HarddiskVolume3');
                                                                createOutput('System Locale:             en-us;English (United States)');
                                                                createOutput('Input Locale:              en-us;English (United States)');
                                                                createOutput('Time Zone:                 (UTC+08:00) Kuala Lumpur, Singapore');
                                                                createOutput('Total Physical Memory:     8,119 MB');
                                                                createOutput('Available Physical Memory: 3,889 MB');
                                                                createOutput('Virtual Memory: Max Size:  12,471 MB');
                                                                createOutput('Virtual Memory: Available: 7,554 MB');
                                                                createOutput('Virtual Memory: In Use:    4,917 MB');
                                                                createOutput('Page File Location(s):     C:\\pagefile.sys');
                                                                createOutput('Domain:                    WORKGROUP');
                                                                createOutput('Logon Server:              \\\\DESKTOP-GLHRCTT');
                                                                createOutput('Hotfix(s):                 16 Hotfix(s) Installed.');
                                                                createOutput('                           [01]: KB5034466');
                                                                createOutput('                           [02]: KB5027122');
                                                                createOutput('                           [03]: KB5011048');
                                                                createOutput('                           [04]: KB5015684');
                                                                createOutput('                           [05]: KB5035845');
                                                                createOutput('                           [06]: KB5014032');
                                                                createOutput('                           [07]: KB5025315');
                                                                createOutput('                           [08]: KB5026879');
                                                                createOutput('                           [09]: KB5028318');
                                                                createOutput('                           [10]: KB5028380');
                                                                createOutput('                           [11]: KB5029709');
                                                                createOutput('                           [12]: KB5031539');
                                                                createOutput('                           [13]: KB5032392');
                                                                createOutput('                           [14]: KB5032907');
                                                                createOutput('                           [15]: KB5034224');
                                                                createOutput('                           [16]: KB5036447');
                                                                createOutput('Network Card(s):           1 NIC(s) Installed.');
                                                                createOutput('                           [01]: Realtek PCIe GbE Family Controller');
                                                                createOutput('                                 Connection Name: Ethernet');
                                                                createOutput('                                 DHCP Enabled:    Yes');
                                                                createOutput('                                 DHCP Server:     192.168.50.1');
                                                                createOutput('                                 IP address(es)');
                                                                createOutput('                                 [01]: 192.168.50.68');
                                                                createOutput('                                 [02]: fe80::743b:199:2609:a4ef');
                                                                createOutput('Hyper-V Requirements:      VM Monitor Mode Extensions: Yes');
                                                                createOutput('                           Virtualization Enabled In Firmware: No');
                                                                createOutput('                           Second Level Address Translation: Yes');
                                                                createOutput('                           Data Execution Prevention Available: Yes');
                                                                
                                                                                                    break;
                                                                
                                                                case 'systeminfo /?':
                                                                    createOutput('Description:');
                                                                createOutput('    This tool displays operating system configuration information for');
                                                                createOutput('    a local or remote machine, including service pack levels.\n');
                                                                createOutput('Parameter List:');
                                                                createOutput('    /S      system           Specifies the remote system to connect to.\n');
                                                                createOutput('    /U      [domain\\]user    Specifies the user context under which');
                                                                createOutput('                             the command should execute.\n');
                                                                createOutput('    /P      [password]       Specifies the password for the given');
                                                                createOutput('                             user context. Prompts for input if omitted.\n');
                                                                createOutput('    /FO     format           Specifies the format in which the output');
                                                                createOutput('                             is to be displayed.');
                                                                createOutput('                             Valid values: "TABLE", "LIST", "CSV".\n');
                                                                createOutput('    /NH                      Specifies that the "Column Header" should');
                                                                createOutput('                             not be displayed in the output.');
                                                                createOutput('                             Valid only for "TABLE" and "CSV" formats.\n');
                                                                createOutput('    /?                       Displays this help message.\n');
                                                                createOutput('Examples:');
                                                                createOutput('    SYSTEMINFO');
                                                                createOutput('    SYSTEMINFO /?');
                                                                createOutput('    SYSTEMINFO /S system');
                                                                createOutput('    SYSTEMINFO /S system /U user');
                                                                createOutput('    SYSTEMINFO /S system /U domain\\user /P password /FO TABLE');
                                                                createOutput('    SYSTEMINFO /S system /FO LIST');
                                                                createOutput('    SYSTEMINFO /S system /FO CSV /NH');
                                                                
                                                                    break;         
                                                                
                                                                case 'tasklist':
                                                                    createOutput('Image Name                     PID Session Name        Session#    Mem Usage');
                                                                createOutput('========================= ======== ================ =========== ===========');
                                                                createOutput('System Idle Process              0 Services                   0          8 K');
                                                                createOutput('System                           4 Services                   0        148 K');
                                                                createOutput('Registry                       100 Services                   0     76,220 K');
                                                                createOutput('smss.exe                       364 Services                   0      1,132 K');
                                                                createOutput('csrss.exe                      484 Services                   0      6,088 K');
                                                                createOutput('wininit.exe                    588 Services                   0      7,456 K');
                                                                createOutput('services.exe                   744 Services                   0      9,924 K');
                                                                createOutput('lsass.exe                      760 Services                   0     20,624 K');
                                                                createOutput('svchost.exe                    892 Services                   0     28,952 K');
                                                                createOutput('fontdrvhost.exe                928 Services                   0      2,992 K');
                                                                createOutput('svchost.exe                   1012 Services                   0     15,332 K');
                                                                createOutput('svchost.exe                    432 Services                   0      8,420 K');
                                                                createOutput('svchost.exe                   1072 Services                   0     10,440 K');
                                                                createOutput('svchost.exe                   1128 Services                   0     12,016 K');
                                                                createOutput('svchost.exe                   1212 Services                   0      6,608 K');
                                                                createOutput('svchost.exe                   1256 Services                   0     18,300 K');
                                                                createOutput('svchost.exe                   1372 Services                   0     11,152 K');
                                                                createOutput('svchost.exe                   1420 Services                   0      8,284 K');
                                                                createOutput('svchost.exe                   1448 Services                   0      7,416 K');
                                                                createOutput('nvvsvc.exe                    1528 Services                   0      9,840 K');
                                                                createOutput('nvSCPAPISvr.exe               1544 Services                   0      6,680 K');
                                                                createOutput('svchost.exe                   1616 Services                   0     12,064 K');
                                                                createOutput('svchost.exe                   1652 Services                   0     15,196 K');
                                                                createOutput('svchost.exe                   1728 Services                   0     10,092 K');
                                                                createOutput('svchost.exe                   1756 Services                   0      8,260 K');
                                                                createOutput('svchost.exe                   1900 Services                   0     12,120 K');
                                                                createOutput('svchost.exe                   1956 Services                   0     16,900 K');
                                                                createOutput('svchost.exe                   2020 Services                   0     14,092 K');
                                                                createOutput('svchost.exe                   2084 Services                   0     10,140 K');
                                                                createOutput('svchost.exe                   2108 Services                   0      7,652 K');
                                                                createOutput('svchost.exe                   2172 Services                   0      8,052 K');
                                                                createOutput('svchost.exe                   2232 Services                   0     14,028 K');
                                                                createOutput('svchost.exe                   2240 Services                   0      6,024 K');
                                                                createOutput('svchost.exe                   2248 Services                   0      7,564 K');
                                                                createOutput('svchost.exe                   2392 Services                   0      8,372 K');
                                                                createOutput('svchost.exe                   2444 Services                   0      8,140 K');
                                                                createOutput('svchost.exe                   2452 Services                   0      7,072 K');
                                                                createOutput('Memory Compression            2460 Services                   0     63,948 K');
                                                                createOutput('svchost.exe                   2672 Services                   0     13,908 K');
                                                                createOutput('svchost.exe                   2772 Services                   0      6,656 K');
                                                                createOutput('svchost.exe                   2780 Services                   0      9,684 K');
                                                                createOutput('svchost.exe                   2892 Services                   0     14,268 K');
                                                                createOutput('svchost.exe                   2948 Services                   0     13,736 K');
                                                                createOutput('spoolsv.exe                   3036 Services                   0     22,164 K');
                                                                createOutput('svchost.exe                   2524 Services                   0     21,800 K');
                                                                createOutput('svchost.exe                   2912 Services                   0      7,904 K');
                                                                createOutput('svchost.exe                   3192 Services                   0     45,068 K');
                                                                createOutput('svchost.exe                   3200 Services                   0      6,148 K');
                                                                createOutput('svchost.exe                   3208 Services                   0      6,740 K');
                                                                createOutput('svchost.exe                   3216 Services                   0     26,160 K');
                                                                createOutput('svchost.exe                   3224 Services                   0     12,924 K');
                                                                createOutput('svchost.exe                   3248 Services                   0     16,976 K');
                                                                createOutput('armsvc.exe                    3280 Services                   0      5,840 K');
                                                                createOutput('svchost.exe                   3320 Services                   0      6,332 K');
                                                                createOutput('svchost.exe                   3360 Services                   0      8,468 K');
                                                                createOutput('svchost.exe                   3404 Services                   0      5,832 K');
                                                                createOutput('svchost.exe                   3420 Services                   0     21,624 K');
                                                                createOutput('svchost.exe                   3452 Services                   0      9,000 K');
                                                                createOutput('sqlwriter.exe                 3476 Services                   0      7,884 K');
                                                                createOutput('MsMpEng.exe                   3528 Services                   0    208,032 K');
                                                                createOutput('svchost.exe                   3604 Services                   0      5,500 K');
                                                                createOutput('mysqld.exe                    3620 Services                   0      9,428 K');
                                                                createOutput('dasHost.exe                   3716 Services                   0      5,076 K');
                                                                createOutput('svchost.exe                   3736 Services                   0     12,664 K');
                                                                createOutput('svchost.exe                   3792 Services                   0     10,816 K');
                                                                createOutput('svchost.exe                   3136 Services                   0      7,660 K');
                                                                createOutput('svchost.exe                   4212 Services                   0      7,260 K');
                                                                createOutput('mysqld.exe                    4260 Services                   0     80,516 K');
                                                                createOutput('conhost.exe                   4324 Services                   0      6,836 K');
                                                                createOutput('svchost.exe                    860 Services                   0     17,924 K');
                                                                createOutput('svchost.exe                   5456 Services                   0      6,876 K');
                                                                createOutput('svchost.exe                   5596 Services                   0      9,188 K');
                                                                createOutput('svchost.exe                   5756 Services                   0      7,032 K');
                                                                createOutput('SearchIndexer.exe             5804 Services                   0     46,240 K');
                                                                createOutput('AggregatorHost.exe            5872 Services                   0      4,812 K');
                                                                createOutput('NisSrv.exe                    1676 Services                   0     11,796 K');
                                                                createOutput('svchost.exe                   6180 Services                   0      5,836 K');
                                                                createOutput('svchost.exe                   6208 Services                   0      9,464 K');
                                                                createOutput('svchost.exe                   6584 Services                   0     18,984 K');
                                                                createOutput('svchost.exe                   1224 Services                   0     17,028 K');
                                                                createOutput('svchost.exe                   2228 Services                   0      8,256 K');
                                                                createOutput('svchost.exe                   7048 Services                   0     11,308 K');
                                                                createOutput('svchost.exe                   2624 Services                   0     16,148 K');
                                                                createOutput('svchost.exe                   1596 Services                   0      8,184 K');
                                                                createOutput('BraveCrashHandler.exe         1288 Services                   0      1,488 K');
                                                                createOutput('BraveCrashHandler64.exe       3744 Services                   0        760 K');
                                                                createOutput('svchost.exe                   7736 Services                   0     22,228 K');
                                                                createOutput('svchost.exe                   8732 Services                   0      9,580 K');
                                                                createOutput('SecurityHealthService.exe     9748 Services                   0     16,252 K');
                                                                createOutput('svchost.exe                   9700 Services                   0      7,884 K');
                                                                createOutput('SgrmBroker.exe               11032 Services                   0      7,704 K');
                                                                createOutput('svchost.exe                   4348 Services                   0     12,016 K');
                                                                createOutput('svchost.exe                  10620 Services                   0     11,376 K');
                                                                createOutput('csrss.exe                     4032 Console                    2      6,536 K');
                                                                createOutput('winlogon.exe                 12104 Console                    2     10,608 K');
                                                                createOutput('fontdrvhost.exe               1064 Console                    2      4,824 K');
                                                                createOutput('dwm.exe                       2076 Console                    2     54,104 K');
                                                                createOutput('nvxdsync.exe                  8724 Console                    2     20,184 K');
                                                                createOutput('nvvsvc.exe                    8868 Console                    2     14,276 K');
                                                                createOutput('svchost.exe                  11764 Services                   0      6,152 K');
                                                                createOutput('svchost.exe                   3852 Console                    2     25,268 K');
                                                                createOutput('sihost.exe                   12052 Console                    2     25,556 K');
                                                                createOutput('svchost.exe                   7060 Console                    2     40,548 K');
                                                                createOutput('taskhostw.exe                 9912 Console                    2     15,932 K');
                                                                createOutput('explorer.exe                  8644 Console                    2    137,152 K');
                                                                createOutput('svchost.exe                   4796 Console                    2     23,660 K');
                                                                createOutput('ctfmon.exe                    8152 Console                    2     22,152 K');
                                                                createOutput('StartMenuExperienceHost.e     8836 Console                    2     68,684 K');
                                                                createOutput('RuntimeBroker.exe             1948 Console                    2     29,052 K');
                                                                createOutput('SearchApp.exe                 4904 Console                    2    100,624 K');
                                                                createOutput('RuntimeBroker.exe             7116 Console                    2     35,904 K');
                                                                createOutput('TextInputHost.exe            11428 Console                    2     42,260 K');
                                                                createOutput('SecurityHealthSystray.exe     1148 Console                    2      9,524 K');
                                                                createOutput('OneDrive.exe                 11696 Console                    2    121,072 K');
                                                                createOutput('RiotClientServices.exe        9516 Console                    2    162,076 K');
                                                                createOutput('msedge.exe                    8632 Console                    2    133,176 K');
                                                                createOutput('msedge.exe                    7484 Console                    2      8,164 K');
                                                                createOutput('msedge.exe                    5364 Console                    2     39,768 K');
                                                                createOutput('msedge.exe                    7796 Console                    2     36,628 K');
                                                                createOutput('msedge.exe                   11952 Console                    2     18,336 K');
                                                                createOutput('msedge.exe                    2360 Console                    2    110,468 K');
                                                                createOutput('msedge.exe                   12232 Console                    2     54,080 K');
                                                                createOutput('msedge.exe                     976 Console                    2     87,700 K');
                                                                createOutput('msedge.exe                    8456 Console                    2     26,224 K');
                                                                createOutput('RiotClientCrashHandler.ex    12136 Console                    2      7,204 K');
                                                                createOutput('figma_agent.exe               9596 Console                    2     16,696 K');
                                                                createOutput('msedge.exe                    8072 Console                    2     18,284 K');
                                                                createOutput('jusched.exe                   8468 Console                    2     17,032 K');
                                                                createOutput('ApplicationFrameHost.exe      8712 Console                    2     27,272 K');
                                                                createOutput('Microsoft.Media.Player.ex     2148 Console                    2      1,524 K');
                                                                createOutput('RuntimeBroker.exe             2068 Console                    2     26');
                                                                
                                                                break;  
                                                                
                                                                case 'tasklist /?':
                                                                    createOutput('Description:');
                                                                createOutput('    This tool displays a list of currently running processes on either a local or remote machine.');
                                                                createOutput('');
                                                                createOutput('Parameter List:');
                                                                createOutput('   /S     system           Specifies the remote system to connect to.');
                                                                createOutput('');
                                                                createOutput('   /U     [domain\\]user    Specifies the user context under which the command should execute.');
                                                                createOutput('');
                                                                createOutput('   /P     [password]       Specifies the password for the given user context. Prompts for input if omitted.');
                                                                createOutput('');
                                                                createOutput('   /M     [module]         Lists all tasks currently using the given exe/dll name. If the module name is not specified all loaded modules are displayed.');
                                                                createOutput('');
                                                                createOutput('   /SVC                    Displays services hosted in each process.');
                                                                createOutput('');
                                                                createOutput('   /APPS                   Displays Store Apps and their associated processes.');
                                                                createOutput('');
                                                                createOutput('   /V                      Displays verbose task information.');
                                                                createOutput('');
                                                                createOutput('   /FI    filter           Displays a set of tasks that match a given criteria specified by the filter.');
                                                                createOutput('');
                                                                createOutput('   /FO    format           Specifies the output format. Valid values: "TABLE", "LIST", "CSV".');
                                                                createOutput('');
                                                                createOutput('   /NH                     Specifies that the "Column Header" should not be displayed in the output. Valid only for "TABLE" and "CSV" formats.');
                                                                createOutput('');
                                                                createOutput('   /?                      Displays this help message.');
                                                                createOutput('');
                                                                createOutput('Filters:');
                                                                createOutput('    Filter Name     Valid Operators           Valid Value(s)');
                                                                createOutput('    -----------     ---------------           --------------------------');
                                                                createOutput('    STATUS          eq, ne                    RUNNING | SUSPENDED NOT RESPONDING | UNKNOWN');
                                                                createOutput('                      |');
                                                                createOutput('    IMAGENAME       eq, ne                    Image name');
                                                                createOutput('    PID             eq, ne, gt, lt, ge, le    PID value');
                                                                createOutput('    SESSION         eq, ne, gt, lt, ge, le    Session number');
                                                                createOutput('    SESSIONNAME     eq, ne                    Session name');
                                                                createOutput('    CPUTIME         eq, ne, gt, lt, ge, le    CPU time in the format of hh:mm:ss. hh - hours, mm - minutes, ss - seconds');
                                                                createOutput('    MEMUSAGE        eq, ne, gt, lt, ge, le    Memory usage in KB');
                                                                createOutput('    USERNAME        eq, ne                    User name in [domain\\]user format');
                                                                createOutput('    SERVICES        eq, ne                    Service name');
                                                                createOutput('    WINDOWTITLE     eq, ne                    Window title');
                                                                createOutput('    MODULES         eq, ne                    DLL name');
                                                                createOutput('');
                                                                createOutput('NOTE: "WINDOWTITLE" and "STATUS" filters are not supported when querying a remote machine.');
                                                                createOutput('');
                                                                createOutput('Examples:');
                                                                createOutput('    TASKLIST');
                                                                createOutput('    TASKLIST /M');
                                                                createOutput('    TASKLIST /V /FO CSV');
                                                                createOutput('    TASKLIST /SVC /FO LIST');
                                                                createOutput('    TASKLIST /APPS /FI "STATUS eq RUNNING"');
                                                                createOutput('    TASKLIST /M wbem*');
                                                                createOutput('    TASKLIST /S system /FO LIST');
                                                                createOutput('    TASKLIST /S system /U domain\\username /FO CSV /NH');
                                                                createOutput('    TASKLIST /S system /U username /P password /FO TABLE /NH');
                                                                createOutput('    TASKLIST /FI "USERNAME ne NT AUTHORITY\\SYSTEM" /FI "STATUS eq running"');
                                                                
                                                                    break;
                                                                
                                                                
                                                                case 'ipconfig':
                                                                    createOutput('Windows IP Configuration');
                                                                createOutput('');
                                                                createOutput('Ethernet adapter Ethernet:');
                                                                createOutput('');
                                                                createOutput('   Connection-specific DNS Suffix  . :');
                                                                createOutput('   Link-local IPv6 Address . . . . . : fe80::743b:199:2609:a4ef%17');
                                                                createOutput('   IPv4 Address. . . . . . . . . . . : 192.168.50.68');
                                                                createOutput('   Subnet Mask . . . . . . . . . . . : 255.255.255.0');
                                                                createOutput('   Default Gateway . . . . . . . . . : 192.168.0.2');
                                                                createOutput('                                       192.168.50.1');
                                                                
                                                                break;    
                                                                
                                                                case 'ipconfig /?':
                                                                    createOutput('USAGE:');
                                                                createOutput('    ipconfig [/allcompartments] [/? | /all |');
                                                                createOutput('                                 /renew [adapter] | /release [adapter] |');
                                                                createOutput('                                 /renew6 [adapter] | /release6 [adapter] |');
                                                                createOutput('                                 /flushdns | /displaydns | /registerdns |');
                                                                createOutput('                                 /showclassid adapter |');
                                                                createOutput('                                 /setclassid adapter [classid] |');
                                                                createOutput('                                 /showclassid6 adapter |');
                                                                createOutput('                                 /setclassid6 adapter [classid] ]');
                                                                createOutput('');
                                                                createOutput('where');
                                                                createOutput('    adapter             Connection name');
                                                                createOutput('                       (wildcard characters * and ? allowed, see examples)');
                                                                createOutput('');
                                                                createOutput('    Options:');
                                                                createOutput('       /?               Display this help message');
                                                                createOutput('       /all             Display full configuration information.');
                                                                createOutput('       /release         Release the IPv4 address for the specified adapter.');
                                                                createOutput('       /release6        Release the IPv6 address for the specified adapter.');
                                                                createOutput('       /renew           Renew the IPv4 address for the specified adapter.');
                                                                createOutput('       /renew6          Renew the IPv6 address for the specified adapter.');
                                                                createOutput('       /flushdns        Purges the DNS Resolver cache.');
                                                                createOutput('       /registerdns     Refreshes all DHCP leases and re-registers DNS names');
                                                                createOutput('       /displaydns      Display the contents of the DNS Resolver Cache.');
                                                                createOutput('       /showclassid     Displays all the dhcp class IDs allowed for adapter.');
                                                                createOutput('       /setclassid      Modifies the dhcp class id.');
                                                                createOutput('       /showclassid6    Displays all the IPv6 DHCP class IDs allowed for adapter.');
                                                                createOutput('       /setclassid6     Modifies the IPv6 DHCP class id.');
                                                                createOutput('');
                                                                createOutput('The default is to display only the IP address, subnet mask and');
                                                                createOutput('default gateway for each adapter bound to TCP/IP.');
                                                                createOutput('');
                                                                createOutput('For Release and Renew, if no adapter name is specified, then the IP address');
                                                                createOutput('leases for all adapters bound to TCP/IP will be released or renewed.');
                                                                createOutput('');
                                                                createOutput('For Setclassid and Setclassid6, if no ClassId is specified, then the ClassId is removed.');
                                                                createOutput('');
                                                                createOutput('Examples:');
                                                                createOutput('    > ipconfig                       ... Show information');
                                                                createOutput('    > ipconfig /all                  ... Show detailed information');
                                                                createOutput('    > ipconfig /renew                ... renew all adapters');
                                                                createOutput('    > ipconfig /renew EL*            ... renew any connection that has its');
                                                                createOutput('                                         name starting with EL');
                                                                createOutput('    > ipconfig /release *Con*        ... release all matching connections,');
                                                                createOutput('                                         eg. "Wired Ethernet Connection 1" or');
                                                                createOutput('                                             "Wired Ethernet Connection 2"');
                                                                createOutput('    > ipconfig /allcompartments      ... Show information about all');
                                                                createOutput('                                         compartments');
                                                                createOutput('    > ipconfig /allcompartments /all ... Show detailed information about all');
                                                                createOutput('                                         compartments');
                                                                
                                                                
                                                                break;
                                                                
                                                                case 'ipconfig /all':
                                                                    createOutput('Windows IP Configuration');
                                                                createOutput('');
                                                                createOutput('   Host Name . . . . . . . . . . . . : DESKTOP-GLHRCTT');
                                                                createOutput('   Primary Dns Suffix  . . . . . . . :');
                                                                createOutput('   Node Type . . . . . . . . . . . . : Hybrid');
                                                                createOutput('   IP Routing Enabled. . . . . . . . : No');
                                                                createOutput('   WINS Proxy Enabled. . . . . . . . : No');
                                                                createOutput('');
                                                                createOutput('Ethernet adapter Ethernet:');
                                                                createOutput('');
                                                                createOutput('   Connection-specific DNS Suffix  . :');
                                                                createOutput('   Description . . . . . . . . . . . : Realtek PCIe GbE Family Controller');
                                                                createOutput('   Physical Address. . . . . . . . . : 40-61-86-99-0A-3E');
                                                                createOutput('   DHCP Enabled. . . . . . . . . . . : Yes');
                                                                createOutput('   Autoconfiguration Enabled . . . . : Yes');
                                                                createOutput('   Link-local IPv6 Address . . . . . : fe80::743b:199:2609:a4ef%17(Preferred)');
                                                                createOutput('   IPv4 Address. . . . . . . . . . . : 192.168.50.68(Preferred)');
                                                                createOutput('   Subnet Mask . . . . . . . . . . . : 255.255.255.0');
                                                                createOutput('   Lease Obtained. . . . . . . . .   : Thursday, 14 March 2024 8:31:22 am');
                                                                createOutput('   Lease Expires . . . . . . . . . . : Friday, 15 March 2024 9:07:54 am');
                                                                createOutput('   Default Gateway . . . . . . . . . : 192.168.0.2');
                                                                createOutput('                                       192.168.50.1');
                                                                createOutput('   DHCP Server . . . . . . . . . . . : 192.168.50.1');
                                                                createOutput('   DHCPv6 IAID . . . . . . . . . . . : 104882566');
                                                                createOutput('   DHCPv6 Client DUID. . . . . . . . : 00-01-00-01-2C-37-CF-DF-40-61-86-99-0A-3E');
                                                                createOutput('   DNS Servers . . . . . . . . . . . : 192.168.50.1');
                                                                createOutput('   NetBIOS over Tcpip. . . . . . . . : Enabled');
                                                                
                                                                
                                                                    break;
                                                                
                                                                case ' ipconfig /allcompartments':
                                                                createOutput('Windows IP Configuration');
                                                                createOutput('');
                                                                createOutput('==============================================================================');
                                                                createOutput('Network Information for Compartment 1 (ACTIVE)');
                                                                createOutput('==============================================================================');
                                                                createOutput('');
                                                                createOutput('Ethernet adapter Ethernet:');
                                                                createOutput('');
                                                                createOutput('   Connection-specific DNS Suffix  . :');
                                                                createOutput('   Link-local IPv6 Address . . . . . : fe80::743b:199:2609:a4ef%17');
                                                                createOutput('   IPv4 Address. . . . . . . . . . . : 192.168.50.68');
                                                                createOutput('   Subnet Mask . . . . . . . . . . . : 255.255.255.0');
                                                                createOutput('   Default Gateway . . . . . . . . . : 192.168.0.2');
                                                                createOutput('                                       192.168.50.1');
                                                                
                                                                    break; 
                                                                
                                                                
                                                                case 'net config':
                                                                    createOutput('The following running services can be controlled:');
                                                                createOutput('');
                                                                createOutput('   Server');
                                                                createOutput('   Workstation');
                                                                createOutput('');
                                                                createOutput('The command completed successfully.');
                                                                
                                                                break;
                                                                
                                                                case 'net config /?':
                                                                    createOutput('The syntax of this command is:');
                                                                    createOutput('');
                                                                    createOutput('NET CONFIG');
                                                                    createOutput('[SERVER | WORKSTATION]');    
                                                                
                                                                break;
                                                                
                                                                case 'net config server':
                                                                    createOutput('System error 5 has occurred.');
                                                                    createOutput('Access is denied.');      
                                                                break;
                                                                
                                                                case 'net config workstation':
                                                                    createOutput('Computer name                        \\DESKTOP-GLHRCTT');
                                                                createOutput('Full Computer name                   DESKTOP-GLHRCTT');
                                                                createOutput('User name                            Huffle');
                                                                createOutput('');
                                                                createOutput('Workstation active on');
                                                                createOutput('        NetBT_Tcpip_{CA5455B3-4356-41EC-A38C-482F74AA78DE} (406186990A3E)');
                                                                createOutput('');
                                                                createOutput('Software version                     Windows 10 Pro');
                                                                createOutput('');
                                                                createOutput('Workstation domain                   WORKGROUP');
                                                                createOutput('Logon domain                         DESKTOP-GLHRCTT');
                                                                createOutput('');
                                                                createOutput('COM Open Timeout (sec)               0');
                                                                createOutput('COM Send Count (byte)                16');
                                                                createOutput('COM Send Timeout (msec)              250');
                                                                createOutput('The command completed successfully.');
                                                                     
                                                                break;  
                                                                
                                                                
                                                                case 'vol':
                                                                createOutput('Volume in drive C is OS');
                                                                createOutput('Volume Serial Number is 1234-5678');
                                                                break;

                                                                case 'vol /?':
                                                                createOutput('Displays the disk volume label and serial number.');
                                                                createOutput('');
                                                                createOutput('VOL [drive:]');
                                                                createOutput('');
                                                                createOutput('  [drive:]  Specifies the drive letter (followed by a colon).');
                                                                createOutput('');
                                                                break;

                                                                case 'path /?':
                                                                    createOutput('Displays or sets a search path for executable files.');
                                                                    createOutput('');
                                                                    createOutput('PATH [directory [; directory [; directory ... ]]]');
                                                                    createOutput('');
                                                                    createOutput('  directory       Specifies the directories to search for executable files.');
                                                                    createOutput('                  Use ";" as the delimiter.');
                                                                    createOutput('');
                                                                    createOutput('Type PATH without parameters to display the current search path.');
                                                                    createOutput('');
                                                                    createOutput('Including multiple directories in the PATH variable allows the system to');
                                                                    createOutput('search for executable files in those directories without needing to specify');
                                                                    createOutput('the full path to the executable every time.');
                                                                    createOutput('');
                                                                    break;

                                                                    case 'path':
                                                                        createOutput('PATH=C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Java\\jdk1.8.0_161\\bin;C:\\xampp\\mysql\\bin;C:\\Users\\WINDOWS 10\\AppData\\Local\\Programs\\Python\\Launcher\\;C:\\Users\\WINDOWS 10\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\WINDOWS 10\\AppData\\Local\\Programs\\Microsoft VS Code\\bin');
                                                                        break;
                                                                    
                                                                        case 'comp':
                                                                            const compExampleOutput = document.createElement('div');
                                                                            compExampleOutput.classList.add('output-box');
                                                                            
                                                                            const compImg = document.createElement('img');
                                                                            compImg.src = 'images/comp.png';
                                                                            compImg.alt = 'Comp Command Image';
                                                                            compImg.style.width = '432px';
                                                                            
                                                                            const compText = document.createElement('p');
                                                                            compText.textContent = ' It checks whether the contents of the specified files are identical or not. If the files are identical, it displays the message "Files compare OK"; otherwise, it displays "Files are different".';
                                                                            compText.style.color = '#fff';
                                                                            
                                                                            compExampleOutput.appendChild(compImg);
                                                                            compExampleOutput.appendChild(compText);
                                                                            
                                                                            userint.appendChild(compExampleOutput);
                                                                            userint.scrollTop = userint.scrollHeight;
                                                                            break;
                                                                        
                                                                            case 'comp /?':
                                                                                createOutput('Compares the contents of two files or sets of files.');
                                                                                createOutput('');
                                                                                createOutput('COMP [data1] [data2]');
                                                                                createOutput('');
                                                                                createOutput('  data1      Specifies the location and name(s) of the first file(s) to compare.');
                                                                                createOutput('  data2      Specifies the location and name(s) of the second file(s) to compare.');
                                                                                createOutput('');
                                                                                createOutput('To compare sets of files, use wildcards in data1 and data2 parameters.');
                                                                                createOutput('If the files are identical, the message "Files compare OK" is displayed; otherwise, the message "Files are different" is displayed.');
                                                                                break;
                                                                            
                                                                                case 'find /?':
                                                                                    createOutput('Searches for a text string in a file or files.');
                                                                                    createOutput('');
                                                                                    createOutput('FIND [/V] [/C] [/N] [/I] [/OFF[LINE]] "string" [[drive:][path]filename[ ...]]');
                                                                                    createOutput('');
                                                                                    createOutput('  /V         Displays all lines NOT containing the specified string.');
                                                                                    createOutput('  /C         Displays only the count of lines containing the string.');
                                                                                    createOutput('  /N         Displays line numbers with the displayed lines.');
                                                                                    createOutput('  /I         Ignores the case of characters when searching for the string.');
                                                                                    createOutput('  /OFF[LINE] Do not skip files with offline attribute set.');
                                                                                    createOutput('  "string"   Specifies the text string to find.');
                                                                                    createOutput('  [drive:][path]filename');
                                                                                    createOutput('             Specifies a file or files to search.');
                                                                                    createOutput('');
                                                                                    createOutput('If a path is not specified, FIND searches the text typed at the prompt');
                                                                                    createOutput('or piped from another command.');
                                                                                    break;
                                                                                
                                                                                    case 'find':
                                                                                        createOutput("Syntax:");
                                                                                        createOutput("FIND [/V][/C][/I][/N] string [d:][path]filename[...]");
                                                                                        createOutput("");
                                                                                        createOutput("Purpose: Finds and reports the location of a specific string of text characters in one or more files.");
                                                                                        createOutput("");
                                                                                        createOutput("Discussion");
                                                                                        createOutput("FIND is a filter command (reads from input, transforms it, and outputs it to the screen, to a file, or to a printer).");
                                                                                        createOutput("FIND searches for a string of characters you enter in the files you name.");
                                                                                        createOutput("The program will display the lines that contain the specified string.");
                                                                                        createOutput("You must put double quote marks before and after the characters to be searched for.");
                                                                                        createOutput("If the string you are searching for already has quotes around it, you must use a double set of quote marks.");
                                                                                        createOutput("If you do not enter a filename, the program will prompt you for one when the program starts.");
                                                                                        createOutput("Wild card characters are not allowed.");
                                                                                    break;
                                                                                    
                                                                                    case 'sort':
                                                                                        createOutput('The following command reads the file EXPENSES.TXT, sorts it in reverse order, and displays it on your screen:');
                                                                                        createOutput('');
                                                                                        createOutput('sort /r < expenses.txt');
                                                                                        createOutput('');
                                                                                        createOutput('Suppose you want to search a large file named MAILLST.TXT for the text "Jones", and you want to sort the results of the search. To do this, use the pipe (|) to direct the output of a FIND command to the SORT command, as shown in the following example:');
                                                                                        createOutput('');
                                                                                        createOutput('find "jones" maillst.txt | sort');
                                                                                        createOutput('');
                                                                                        createOutput('This command produces a sorted list of lines that contain the specified text.');
                                                                                        createOutput('');
                                                                                        createOutput('To sort keyboard input and display the results alphabetically on the screen, you can first use the SORT command with no parameters, as the following example shows:');
                                                                                        createOutput('');
                                                                                        createOutput('SORT');
                                                                                        createOutput('');
                                                                                        createOutput('Then type the text you want sorted, pressing ENTER at the end of each line. When you have finished typing text, press CTRL+Z, and then press ENTER. The SORT command displays the text you typed, sorted alphabetically. You could also redirect sorted keyboard input to a file.');
                                                                                        break;
                                                                       
                                                                                        

                                                                                        case 'sort /?':
                                                                                            createOutput('SORT [/R] [/+n] [/M kilobytes] [/L locale] [/REC recordbytes]');
                                                                                            createOutput('  [[drive1:][path1]filename1] [/T [drive2:][path2]]');
                                                                                            createOutput('  [/O [drive3:][path3]filename3]');
                                                                                            createOutput('  /+n                         Specifies the character number, n, to');
                                                                                            createOutput('                              begin each comparison.  /+3 indicates that');
                                                                                            createOutput('                              each comparison should begin at the 3rd');
                                                                                            createOutput('                              character in each line.  Lines with fewer');
                                                                                            createOutput('                              than n characters collate before other lines.');
                                                                                            createOutput('                              By default comparisons start at the first');
                                                                                            createOutput('                              character in each line.');
                                                                                            createOutput('  /L[OCALE] locale            Overrides the system default locale with');
                                                                                            createOutput('                              the specified one.  The ""C"" locale yields');
                                                                                            createOutput('                              the fastest collating sequence and is');
                                                                                            createOutput('                              currently the only alternative.  The sort');
                                                                                            createOutput('                              is always case insensitive.');
                                                                                            createOutput('  /M[EMORY] kilobytes         Specifies amount of main memory to use for');
                                                                                            createOutput('                              the sort, in kilobytes.  The memory size is');
                                                                                            createOutput('                              always constrained to be a minimum of 160');
                                                                                            createOutput('                              kilobytes.  If the memory size is specified');
                                                                                            createOutput('                              the exact amount will be used for the sort,');
                                                                                            createOutput('                              regardless of how much main memory is');
                                                                                            createOutput('                              available.');
                                                                                            createOutput('                              The best performance is usually achieved by');
                                                                                            createOutput('                              not specifying a memory size.  By default the');
                                                                                            createOutput('                              sort will be done with one pass (no temporary');
                                                                                            createOutput('                              file) if it fits in the default maximum');
                                                                                            createOutput('                              memory size, otherwise the sort will be done');
                                                                                            createOutput('                              in two passes (with the partially sorted data');
                                                                                            createOutput('                              being stored in a temporary file) such that');
                                                                                            createOutput('                              the amounts of memory used for both the sort');
                                                                                            createOutput('                              and merge passes are equal.  The default');
                                                                                            createOutput('                              maximum memory size is 90% of available main');
                                                                                            createOutput('                              memory if both the input and output are');
                                                                                            createOutput('                              files, and 45% of main memory otherwise.');
                                                                                            createOutput('  /REC[ORD_MAXIMUM] characters Specifies the maximum number of characters');
                                                                                            createOutput('                              in a record (default 4096, maximum 65535).');
                                                                                            createOutput('  /R[EVERSE]                  Reverses the sort order; that is,');
                                                                                            createOutput('                              sorts Z to A, then 9 to 0.');
                                                                                            createOutput('  [drive1:][path1]filename1   Specifies the file to be sorted.  If not');
                                                                                            createOutput('                              specified, the standard input is sorted.');
                                                                                            createOutput('                              Specifying the input file is faster than');
                                                                                            createOutput('                              redirecting the same file as standard input.');
                                                                                            createOutput('  /T[EMPORARY]');
                                                                                            createOutput('    [drive2:][path2]          Specifies the path of the directory to hold');
                                                                                            createOutput('                              the sort\'s working storage, in case the data');
                                                                                            createOutput('                              does not fit in main memory.  The default is');
                                                                                            createOutput('                              to use the system temporary directory.');
                                                                                            createOutput('  /O[UTPUT]');
                                                                                            createOutput('    [drive3:][path3]filename3 Specifies the file where the sorted input is');
                                                                                            createOutput('                              to be stored.  If not specified, the data is');
                                                                                            createOutput('                              written to the standard output.   Specifying');
                                                                                            createOutput('                              the output file is faster than redirecting');
                                                                                            createOutput('                              standard output to the same file.');
                                                                                            break;
                                                                                           

                                                                                            case 'del':
                                                                                                    createOutput('Deletes one file.');
                                                                                                    createOutput('');
                                                                                                    createOutput('DEL [drive:][path]filename');
                                                                                                    createOutput('DELETE [drive:][path]filename');
                                                                                                    createOutput('');
                                                                                                    createOutput('Delete only operates in the system directories of the current Windows installation, removable media, the root directory of any hard disk partition, or the local installation sources.');
                                                                                                    createOutput('');
                                                                                                    createOutput('Del and delete do not support replaceable parameters (wildcards).');
                                                                                                    break;
                                                                                                
                                                                                                    case 'type':
                                                                                                       
                                                                                                        const typeExampleOutput = document.createElement('div');
                                                                                                        typeExampleOutput.classList.add('output-box');
                                                                                                    
                                                                                                    
                                                                                                        const typeImg = document.createElement('img');
                                                                                                        typeImg.src = 'images/type.png'; 
                                                                                                        typeImg.alt = 'Type Command Image';
                                                                                                        typeImg.style.width = '432px'; 
                                                                                                    
                                                                                              
                                                                                                        const typeText = document.createElement('p');
                                                                                                        typeText.textContent = 'Displays the contents of a text file.';
                                                                                                        typeText.style.color = '#fff'; 
                                                                                                    
                                                                                                  
                                                                                                        typeExampleOutput.appendChild(typeImg);
                                                                                                        typeExampleOutput.appendChild(typeText);
                                                                                                    
                                                                                         
                                                                                                        userint.appendChild(typeExampleOutput);

                                                                                                        userint.scrollTop = userint.scrollHeight;
                                                                                                        break;

                                                                                                        case 'move':
                                                                                                      
                                                                                                            const moveExampleOutput = document.createElement('div');
                                                                                                            moveExampleOutput.classList.add('output-box');
                                                                                                        
                                                                                                          
                                                                                                            const moveImg = document.createElement('img');
                                                                                                            moveImg.src = 'images/move.png'; 
                                                                                                            moveImg.alt = 'Move Command Image';
                                                                                                            moveImg.style.width = '432px'; 
                                                                                                        
                                                                                               
                                                                                                            const moveText = document.createElement('p');
                                                                                                            moveText.textContent = 'The Dir /b command is used to list all the files and folders inside a directory. In the above example, we have moved an extension-less file named salute from C:\suga to C:\suga\apples directory';
                                                                                                            moveText.style.color = '#fff'; 
                                                                                                        
                                                                                              
                                                                                                            moveExampleOutput.appendChild(moveImg);
                                                                                                            moveExampleOutput.appendChild(moveText);
                                                                                                        
                                                                                                         
                                                                                                            userint.appendChild(moveExampleOutput);
                                                                                                           
                                                                                                            userint.scrollTop = userint.scrollHeight;
                                                                                                            break;
                                                                                                        
                                                                                                            case 'netstat':
                                                                                                            
                                                                                                                const netstatExampleOutput = document.createElement('div');
                                                                                                                netstatExampleOutput.classList.add('output-box');
                                                                                                            
                                                                                                       
                                                                                                                const netstatImg = document.createElement('img');
                                                                                                                netstatImg.src = 'images/netstat.jpg'; 
                                                                                                                netstatImg.alt = 'Netstat Command Image';
                                                                                                                netstatImg.style.width = '432px'; 
                                                                                                            
                                                                                                             
                                                                                                                const netstatText = document.createElement('p');
                                                                                                                netstatText.textContent = 'Displays active network connections and listening ports.';
                                                                                                                netstatText.style.color = '#fff'; 
                                                                                                            
                                                                                                               
                                                                                                                netstatExampleOutput.appendChild(netstatImg);
                                                                                                                netstatExampleOutput.appendChild(netstatText);
                                                                                                            
                                                                                                          
                                                                                                                userint.appendChild(netstatExampleOutput);
                                                                                                             
                                                                                                                userint.scrollTop = userint.scrollHeight;
                                                                                                                break;
                                                                                                            
                                                                                                                case 'netstat /?':
                                                                                                                    createOutput('Displays protocol statistics and current TCP/IP network connections.');
                                                                                                                    createOutput('');
                                                                                                                    createOutput('NETSTAT [-a] [-b] [-e] [-f] [-n] [-o] [-p proto] [-r] [-s] [-t] [-x] [-y] [interval]');
                                                                                                                    createOutput('');
                                                                                                                    createOutput('  -a            Displays all connections and listening ports.');
                                                                                                                    createOutput('  -b            Displays the executable involved in creating each connection or');
                                                                                                                    createOutput('                listening port. In some cases well-known executables host');
                                                                                                                    createOutput('                multiple independent components, and in these cases the');
                                                                                                                    createOutput('                sequence of components involved in creating the connection');
                                                                                                                    createOutput('                or listening port is displayed. In this case the executable');
                                                                                                                    createOutput('                name is in [] at the bottom, on top is the component it called,');
                                                                                                                    createOutput('                and so forth until TCP/IP was reached. Note that this option');
                                                                                                                    createOutput('                can be time-consuming and will fail unless you have sufficient');
                                                                                                                    createOutput('                permissions.');
                                                                                                                    createOutput('  -e            Displays Ethernet statistics. This may be combined with the -s');
                                                                                                                    createOutput('                option.');
                                                                                                                    createOutput('  -f            Displays Fully Qualified Domain Names (FQDN) for foreign');
                                                                                                                    createOutput('                addresses.');
                                                                                                                    createOutput('  -n            Displays addresses and port numbers in numerical form.');
                                                                                                                    createOutput('  -o            Displays the owning process ID associated with each connection.');
                                                                                                                    createOutput('  -p proto      Shows connections for the protocol specified by proto; proto');
                                                                                                                    createOutput('                may be any of: TCP, UDP, TCPv6, or UDPv6.  If used with the -s');
                                                                                                                    createOutput('                option to display per-protocol statistics, proto may be any of:');
                                                                                                                    createOutput('                IP, IPv6, ICMP, ICMPv6, TCP, TCPv6, UDP, or UDPv6.');
                                                                                                                    createOutput('  -q            Displays all connections, listening ports, and bound');
                                                                                                                    createOutput('                nonlistening TCP ports. Bound nonlistening ports may or may not');
                                                                                                                    createOutput('                be associated with an active connection.');
                                                                                                                    createOutput('  -r            Displays the routing table.');
                                                                                                                    createOutput('  -s            Displays per-protocol statistics.  By default, statistics are');
                                                                                                                    createOutput('                shown for IP, IPv6, ICMP, ICMPv6, TCP, TCPv6, UDP, and UDPv6;');
                                                                                                                    createOutput('                the -p option may be used to specify a subset of the default.');
                                                                                                                    createOutput('  -t            Displays the current connection offload state.');
                                                                                                                    createOutput('  -x            Displays NetworkDirect connections, listeners, and shared');
                                                                                                                    createOutput('                endpoints.');
                                                                                                                    createOutput('  -y            Displays the TCP connection template for all connections.');
                                                                                                                    createOutput('                Cannot be combined with the other options.');
                                                                                                                    createOutput('  interval      Redisplays selected statistics, pausing interval seconds');
                                                                                                                    createOutput('                between each display.  Press CTRL+C to stop redisplaying');
                                                                                                                    createOutput('                statistics.  If omitted, netstat will print the current');
                                                                                                                    createOutput('                configuration information once.');
                                                                                                                    break;
                                                                                                                    case 'assoc':
                                                                                                                        // Create a container for the example output
                                                                                                                        const assocExampleOutput = document.createElement('div');
                                                                                                                        assocExampleOutput.classList.add('output-box');
                                                                                                                    
                                                                                                                        // Create an image element for the example
                                                                                                                        const assocImg = document.createElement('img');
                                                                                                                        assocImg.src = 'images/assoc.png'; // Path to your image
                                                                                                                        assocImg.alt = 'Assoc Command Image';
                                                                                                                        assocImg.style.width = '432px'; // Adjust image width as needed
                                                                                                                    
                                                                                                                        // Create a paragraph for the command description
                                                                                                                        const assocText = document.createElement('p');
                                                                                                                        assocText.textContent = 'When running the command, you can associate a particular extension to open any program or application. Syntax: assoc [.ext[=[fileType]]]'

                                                                                                                        
                                                                                                                        assocText.style.color = '#fff'; // Set text color to white or adjust as needed
                                                                                                                    
                                                                                                                        // Append the image and text to the example output container
                                                                                                                        assocExampleOutput.appendChild(assocImg);
                                                                                                                        assocExampleOutput.appendChild(assocText);
                                                                                                                    
                                                                                                                        // Append the example output container to the user interface
                                                                                                                        userint.appendChild(assocExampleOutput);
                                                                                                                        // Scroll to the bottom of the user interface
                                                                                                                        userint.scrollTop = userint.scrollHeight;
                                                                                                                        break;

                                                                                                                        case 'doskey':
                                                                                                
                                                                                                const doskeyExampleOutput = document.createElement('div');
                                                                                                doskeyExampleOutput.classList.add('output-box');

                                                                                                const doskeyImg = document.createElement('img');
                                                                                                doskeyImg.src = 'images/doskey.png'; 
                                                                                                doskeyImg.alt = 'Doskey Command Image';
                                                                                                doskeyImg.style.width = '432px'; 

                                                                                            
                                                                                                const doskeyText = document.createElement('p');
                                                                                                doskeyText.textContent = 'The doskey command is used to create macros, define function keys, and recall previously entered commands.';
                                                                                                doskeyText.style.color = '#fff'; 


                                                                                                doskeyExampleOutput.appendChild(doskeyImg);
                                                                                                doskeyExampleOutput.appendChild(doskeyText);

                                                                                            
                                                                                                userint.appendChild(doskeyExampleOutput);
                                                                                            
                                                                                                userint.scrollTop = userint.scrollHeight;
                                                                                                break;

                                                                                                case 'doskey /?':
                                                                                                    createOutput('Edits command lines, recalls Windows commands, and creates macros.');
                                                                                                    createOutput('');
                                                                                                    createOutput('DOSKEY [/REINSTALL] [/LISTSIZE=size] [/MACROS[:ALL | :exename]]');
                                                                                                    createOutput('  [/HISTORY] [/INSERT | /OVERSTRIKE] [/EXENAME=exename] [/MACROFILE=filename]');
                                                                                                    createOutput('  [macroname=[text]]');
                                                                                                    createOutput('');
                                                                                                    createOutput('/REINSTALL - Installs a new copy of Doskey.');
                                                                                                    createOutput('/LISTSIZE=size - Sets size of command history buffer.');
                                                                                                    createOutput('/MACROS - Displays all Doskey macros.');
                                                                                                    createOutput('/MACROS:ALL - Displays all Doskey macros for all executables which have Doskey macros.');
                                                                                                    createOutput('/MACROS:exename - Displays all Doskey macros for the given executable.');
                                                                                                    createOutput('/HISTORY - Displays all commands stored in memory.');
                                                                                                    createOutput('/INSERT - Specifies that new text you type is inserted in old text.');
                                                                                                    createOutput('/OVERSTRIKE - Specifies that new text overwrites old text.');
                                                                                                    createOutput('/EXENAME=exename - Specifies the executable.');
                                                                                                    createOutput('/MACROFILE=filename - Specifies a file of macros to install.');
                                                                                                    createOutput('macroname=text - Specifies a name for a macro you create.');
                                                                                                    createOutput('text - Specifies commands you want to record.');
                                                                                                    createOutput('');
                                                                                                    createOutput('The following are some special codes in Doskey macro definitions: $T, $1-$9, $*');
                                                                                                    break;
                                                                                                                     
                                                                                                    
    }
}





//GETTING THE DATE AND TIME

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
console.log(formattedDate); 




commandInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = commandInput.value.trim();
        if (command !== '') {
            executeCommand(command);
            commandInput.value = '';
        }
    }
});


commandInput.focus();