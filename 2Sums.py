def two_sums(nums, target):
    i = 0
    j = 0
    print(nums)
    for i in range(len(nums)):
        for j in range(len(nums)):
            if nums[i] + nums[j] == target:
                print([i, j])
                break


two_sums([2, 7, 10, 11], 9)
