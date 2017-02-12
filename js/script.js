		//defaults;
		$('.save').hide();
		$('.cancel').hide();
countTaskOther(); countTask();

		//ADD ITEM
$('button#add').on('click',function(){
		var addTask = $('#add-task').val();//новое получемое значениеж
		if(addTask ==='') {
		//show alert message
			$('.empty').html('<span class="goodMess">Please, enter your new task!</span>').fadeIn('slow').delay(2000).fadeOut();
			$('.success').hide();
		}else{
			$('.success').html('<span class="goodMess">New task was added!</span>').fadeIn('slow').delay(1000).fadeOut();
			$('.empty').hide();
  			$('.newBlocks .list-group-item.newTask label.checkboxLabel').text(addTask);
  			$('.newBlocks .list-group-item.newTask input.inp').val(addTask);

  			var cloneRow = $('.newBlocks .list-group-item.newTask').clone();
  			if (!cloneRow.hasClass('incomplete-task')) { 
  			cloneRow.addClass('incomplete-task');
  				countTaskOther();
				countTask();
		}		
       		$('#add-task').val('');
			cloneRow.insertAfter($('form'));
				countTaskOther();
				countTask();
			return false;
		};
	});

		//EDIT TASK
		$('ul').on('click', '.glyphicon-pencil',function(){
			var parent = $(this).closest(".list-group-item.newTask");
			if (!parent.hasClass('editMode')) {
				parent.addClass('editMode');
											}
			parent.find('.save').html("Save").fadeIn('slow');
			parent.find('.cancel').html("Cancel").fadeIn('slow');
			parent.find('.glyphicon-pencil').hide();
			parent.find('.glyphicon-remove').hide();
		});

			$('ul').on('click', '.save',function(){
				var parent = $(this).closest(".list-group-item.newTask");
				var editTask =  parent.find('.inp').val();
				var editLabel =   parent.find('.checkboxLabel');
					editLabel.html(editTask);
					parent.removeClass('editMode');
		
			$('.save').hide();
			$('.cancel').hide();

			parent.find('.glyphicon-pencil').show();
			parent.find('.glyphicon-remove').show();
		});

		$('ul').on('click', '.cancel',function(){
			var parent = $(this).closest(".list-group-item.newTask");
				parent.removeClass('editMode');
				parent.find('.glyphicon-remove').show();parent.find('.glyphicon-pencil').show();
				parent.find('.save').hide();
				parent.find('.cancel').hide();
			});

		//COMPLETE TASK
		$('ul').on('change','input[type="checkbox"]', function(){
				var parent = $(this).closest(".list-group-item.newTask");
		
			 if(parent.hasClass('completed-task')){
				parent.removeClass('completed-task').addClass('ncomplete-task');
				countTaskOther();countTaskOther()
			}else{
				parent.removeClass('incomplete-task').addClass('completed-task');
			}
				countTaskOther(); countTask();
		});

		//DELETE TASK 
			$('ul').on('click','.glyphicon-remove',function(){
			$(this).closest(".list-group-item.newTask").remove();
				countTaskOther(); countTask();
		});

		//DELETE ALL completed-tasks    
			$('#removeAllChecked').on('click',function(){
				console.log($('.completed-task').remove());
				countTaskOther(); countTask();
		});

		//TASK COUNTER
		function countTask(){
			var remainTask = $('#incomplete-tasks > li.completed-task').length;
			$('#counter').hide().fadeIn(300).html(remainTask);
			var remainTask1 = $('#incomplete-tasks > li.incomplete-task').length;
			$('#counterIncomplete').hide().fadeIn(300).html(remainTask1);
	};
			countTask();
	 	function countTaskOther(){
			var remainTask1 = $('#incomplete-tasks > li.incomplete-task').length;
			$('#counterIncomplete').hide().fadeIn(300).html(remainTask1);
	};
		countTaskOther();

		// All, Active, Completed buttons
		$('#completed').on('click',function(){
			$('.completed-task').show(); 			$('.incomplete-task').hide();
		});

		$('#active').on('click',function(){
			$('.completed-task').hide();			$('.incomplete-task').show();
		});

		$('#all').on('click',function(){
			$('.completed-task').show();			$('.incomplete-task').show();
		});

