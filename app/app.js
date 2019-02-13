/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  if(localStorage["folders"] !== undefined){
    let folders = localStorage.getItem("folders");
    folders = JSON.parse(folders);
    for(let i in folders){
      $(".container-folder").append(folders[i]);
    }
  }
  else{
    let folders = ['<button class="btn-folder" id="folder-default"> Notes </button>'];
    $(".container-folder").append(folders[0]);
    folders = JSON.stringify(folders);
    localStorage["folders"] = folders;
  }
  $(".newFolderMenu").hide();
  $(".btn-newFolder").click(function(){
    $(".newFolderMenu").show(175);
    $(".content > *").not(".newFolderMenu").hide();
    $(".cancel").click(function(){
      $(".content > *").not(".newFolderMenu").show(175);
      $(".newFolderMenu").hide();
    });
    $(".add").click(function(){
      let name = $(".folderName").val();
      let folders = localStorage["folders"]
      folders = JSON.parse(folders);
      let folder = '<button class="btn-folder" id="folder-' + folders.length + '">' +  name + '</button>';
      folders.push(folder);
      folders = JSON.stringify(folders);
      localStorage["folders"] = folders;
      $(".container-folder").append(folder);
      $(".content > *").not(".newFolderMenu").show(175);
      $(".newFolderMenu").hide();
    })
  })
  $(".editMenu").hide();
  let edit = false;
  $(".btn-edit").click(function(){
    if(edit === true){
      $(".btn-edit").text("Edit")
      $(".editText").remove();
      edit = false;
    } else{
      if($(".editText").length === 0){
        $(".content").prepend('<p class="editText">Click a folder to modify/delete</p>');
      }
      $(".btn-edit").text("Done")
      edit = true;
      $(".btn-folder").click(function(){
        $(".editMenu > p").text("Edit Folder "  + $(this).text())

        $(".editMenu").show();
      })
  }
  })
})
